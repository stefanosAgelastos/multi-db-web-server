const express = require("express");
const db = require("../connectors/db.mysql");
const router = express.Router();

router.get('/presenceKey/mySubjects', function (req, res) {

    // we receive from request body:
    // * teachers_id
    // we expect to return
    // * a list of subjects and semesters

    const providedTeacherId = req.body.teacher_id;

    db.sequelize.models.teachers_subjects.findAll(
        {
            attributes: ['semester'],
            where: { teacher_id: providedTeacherId },
            include: {
                model: db.sequelize.models.subjects,
                as: 'subject',
                attributes: ['subject_name','subject_id'],
            },
        }
    ).then((foundTeacherAndSubjects) => {
        console.log(foundTeacherAndSubjects.forEach(element => console.log(element.toJSON())));
        const list = [];
        foundTeacherAndSubjects.forEach(element => list.push([element.semester, element.subject.subject_name, element.subject.subject_id]))
        res.send(list);
    }
    ).catch(err => {
        console.log(err);
        res.status(500).send("Something went wrong");
    })

})

router.post("/presenceKey", function (req, res) {

    // we receive from request body:
    // * teachers_id
    // * subject_id
    // * semester
    // * passphrase to use as presenceKey
    // we expect to return a token

    const providedTeacherId = req.body.teacher_id;
    const providedSubjectId = req.body.subject_id;
    const providedSemester = req.body.semester;
    const providedPresenceKey = req.body.passphrase;

    console.log("Teacher id is: " + providedTeacherId)
    console.log("Subject id is: " + providedSubjectId)
    console.log("Semester is: " + providedSemester)
    console.log("Passphrase is: " + providedPresenceKey)

    // starting transaction
    return db.sequelize.transaction(
        {
            autocommit: false
        }
    ).then(function (t) {
        // transaction has started
        // looking for teacher with provided id
        return db.sequelize.models.teachers.findOne(
            { where: { teacher_id: providedTeacherId } },
            { transaction: t })
            .then(foundTeacher => {
                // if null, there was no match
                if (!foundTeacher) {
                    // so throw custom error
                    throw {
                        custom_status: 404,
                        custom_msg: "Teacher not found"
                    };
                }
                // else keep looking for teacher, this time:
                // with provided id 
                // AND associated subject id
                // AND in the provided semester
                console.log('Found teacher: ', foundTeacher.toJSON());
                return db.sequelize.models.teachers.findOne(
                    {
                        where: { teacher_id: providedTeacherId },
                        include: {
                            model: db.sequelize.models.subjects,
                            as: 'subject_id_subjects_teachers_subjects',
                            where: { subject_id: providedSubjectId },
                            through: { where: { semester: providedSemester } }
                        },
                    },
                    { transaction: t })
            })
            .then(foundTeacherAndSubject => {
                // if null, there was no match
                if (!foundTeacherAndSubject) {
                    // so throw custom error
                    throw {
                        custom_status: 404,
                        custom_msg: "Teacher with id: " + providedTeacherId + ", is not assigned to subject with id " + providedSubjectId + ", for semester: " + providedSemester
                    };
                }

                // else start saving a new presence key
                console.log('Found teacher-subject-semester association: ', foundTeacherAndSubject.toJSON())
                return db.sequelize.models.presence_key.create({
                    teacher_id: foundTeacherAndSubject.teacher_id,
                    subject_id: foundTeacherAndSubject.subject_id_subjects_teachers_subjects[0].subject_id,
                    semester: foundTeacherAndSubject.subject_id_subjects_teachers_subjects[0].teachers_subjects.semester,
                    actual_presence_key: providedPresenceKey,
                    current_dateTime: db.sequelize.literal('CURRENT_TIMESTAMP')
                });
            })
            .then(() => {
                return t.commit()
            })
            .then(() => res.send(providedPresenceKey))
            .catch(function (err) {
                t.rollback();
                let { custom_status, custom_msg } = err
                if (custom_status, custom_msg) {
                    res.status(404).send(custom_msg);
                    throw err;
                }
                if (err.name === 'SequelizeUniqueConstraintError') {
                    res.status(409).send('Passphrase taken, please choose a different one')
                    throw err;
                }
                res.status(500).send('Something went wrong')
                throw err;
            });
    }).catch(err => console.log(err));

})

module.exports = router;
