const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require("../connectors/db.mysql");
const rateLimiter = require('../util/rate-limiter');
const { validateRegister } = require('../util/validate');

//POST
router.post('/register', rateLimiter, async (req, res) => {

    const { error } = validateRegister(req.body);
    if (error) return res.status(400).send(error.details[0].message); //400 = bad request

    console.log(req.body)

    // We receive this from the request body
    const { email, activation_code, password } = req.body;
    const hashed_password = await bcrypt.hash(password, 10);

    _is_teacher = null
    is_student = null

    db.sequelize.models.teachers.findOne({ where: { email: email } })
        .then(teacher => {
            if (teacher) {
                _is_teacher = true
                if (teacher.password === activation_code) {
                    teacher.update({ password: hashed_password });
                    res.redirect('/login')
                } else {
                    res.status(400).send("Teacher: wrong activation code")
                }
            } else {
                return db.sequelize.models.students.findOne({ where: { user_name: email } })
            }
        })
        .then(student => {
            if (student) {
                _is_student = true
                if (student.password === activation_code) {
                    student.update({ password: hashed_password });
                    res.redirect('/login')
                } else {
                    res.status(400).send("Student: wrong activation code")
                }
            } else {
                res.status(400).send("Email is not in the system")
            }
        })
        .catch()
});

module.exports = router;