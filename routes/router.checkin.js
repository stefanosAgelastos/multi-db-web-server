const express = require("express");
const db = require("../connectors/db.mysql");
const { validateCheckIn } = require('../util/validate');
const router = express.Router();

router.post("/checkin", function (req, res) {

    /*
       #swagger.tags = ['checkin', 'student', 'mysql']
       #swagger.summary = 'student checks in as present using a passphrase'
       #swagger.consumes = ['application/json']
       #swagger.parameters['body'] = {
           in: 'body',
           description: 'id of the student, passphrase',
           required: true,
           schema: {
               student_id: 1,
               passphrase: 'little blue monkeys'
           }
       }
       #swagger.responses[200] = { description: "Succesfully checked in" } */

    const { error } = validateCheckIn(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    const providedStudentId = req.body.student_id;
    const providedPresenceKey = req.body.passphrase;

    console.log('student is: ', providedStudentId)
    console.log('passphrase is: ', providedPresenceKey)

    db.sequelize.models.presence_key.findOne({
        where: { actual_presence_key: providedPresenceKey }
    }).then(
        foundPresenceKey => {

            if (!foundPresenceKey) {
                throw {
                    custom_status: 404,
                    custom_msg: "Passphrase not found"
                };
            }

            const semester = foundPresenceKey.semester;
            const subject_id = foundPresenceKey.subject_id;
            const presence_key_id = foundPresenceKey.presence_key_id;

            console.log('semester is: ', semester);
            console.log('subject is: ', subject_id);

            return db.sequelize.models.students_presence.create({
                student_id: providedStudentId,
                semester: semester,
                subject_id: subject_id,
                presence_key_id: presence_key_id,
                current_datetime: db.sequelize.literal('CURRENT_TIMESTAMP')
            });

        })
        .then(() => {
            res.send('Checked in!')
        })
        .catch(err => {
            let { custom_status, custom_msg } = err
            if (custom_status, custom_msg) {
                res.status(custom_status).send(custom_msg);
                throw err;
            }
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(409).send('You have already checked in')
                throw err;
            }
            if (err.name === 'SequelizeForeignKeyConstraintError') {
                res.status(401).send('You are not authorized for this Class')
                throw err;
            }
            res.status(500).send('Something went wrong');
            throw err;
        });
})

module.exports = router;
