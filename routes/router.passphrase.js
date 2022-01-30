const express = require("express");
const db = require("../connectors/db.mysql");
const router = express.Router();
const { authenticateToken } = require('../util/authenticate');


router.post('/passphrase/mySubjects', authenticateToken('teacher'), function (req, res) {

    /*
       #swagger.tags = ['checkin', 'teacher', 'mysql']
       #swagger.summary = 'Get a list of subject-semester pairs for a teacher'
       #swagger.consumes = ['application/json']
       #swagger.responses[200] = {
           description: "list of the teacher's subject-semester pairs",
       } */

    const providedTeacherId = req.user.id;

    db.sequelize.models.teachers_semesters_subjects.findAll(
        {
            where: { teacher_id: providedTeacherId },
        }
    ).then((foundTeacherAndSubjects) => {
        console.log(foundTeacherAndSubjects.forEach(element => console.log(element.toJSON())));
        const list = [];
        foundTeacherAndSubjects.forEach(element => list.push({semester: element.semester, subject_name: element.subject_name, subject_id: element.subject_id}));
        res.send(list);
    }
    ).catch(err => {
        console.log(err);
        res.status(500).send("Something went wrong");
    })

})

router.post("/passphrase", authenticateToken('teacher'), function (req, res) {
    
    /*
       #swagger.tags = ['checkin', 'teacher', 'mysql']
       #swagger.summary = 'teacher creates passphrase for their class, so that students can checkin'
       #swagger.consumes = ['application/json']
       #swagger.parameters['body'] = {
           in: 'body',
           description: 'id of the teacher, passphrase, subject id and semester of the class',
           required: true,
           schema: {
               subject_id: 1,
               semester: 'SD21i',
               passphrase: 'little blue monkeys'
           }
       }
       #swagger.responses[200] = { description: "Succesfully created passphrase" } */


    const providedTeacherId = req.user.id;
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
                },
                    { transaction: t });
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
