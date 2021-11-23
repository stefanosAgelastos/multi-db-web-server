const express = require("express");
const db = require("../connectors/db.mysql");
const router = express.Router();

router.post("/checkin", function (req, res) {

    // we receive from request body:
    // * student_id
    // * passphrase
    // we expect to return success or fail

    const providedStudentId = req.body.student_id;
    const providedPresenceKey = req.body.passphrase;

    console.log('student is: ', providedStudentId)
    console.log('passphrase is: ', providedPresenceKey)

    console.log('BEFORE THE PROMISE');

    db.sequelize.models.presence_key.findOne({
        where: { actual_presence_key: providedPresenceKey }
    }).then(
        foundPresenceKey => {
            console.log('INSIDE THE THEN METHOD');

            const semester = foundPresenceKey.semester;
            const subject_id = foundPresenceKey.subject_id;

            console.log('semester is: ', semester);
            console.log('subject is: ', subject_id);


            db.sequelize.models.students_presence.create({
                student_id: providedStudentId,
                semester: semester,
                subject_id: subject_id,
                current_datetime: db.sequelize.literal('CURRENT_TIMESTAMP'),
            });


            res.send([providedStudentId, providedPresenceKey]);

        }
    ).catch(err => {
        console.log('INSIDE THE CATCH', err);
    });

    console.log('AFTER THE PROMISE');




    // res.send([providedStudentId, providedPresenceKey]);




})

module.exports = router;
