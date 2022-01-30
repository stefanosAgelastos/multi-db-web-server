const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { validateLogin } = require('../util/validate');
const ratelimiter = require('../util/rate-limiter');
const db = require('../connectors/db.mysql');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../util/authenticate');


router.post('/login', ratelimiter, async (req, res) => {

    /*
        #swagger.tags = ['authentication/authorization', 'mysql']
        #swagger.summary = 'login for students and teachers and get token'
        #swagger.consumes = ['application/json']
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'credential set of email and password',
            required: true,
            schema: {
                email: "ASBC@kea.dk", 
                password: "weqweqwe"
            }
        }
        #swagger.responses[200] = { description: "Succesfull login and redirect to user's home" } */

    try {

        const { error } = validateLogin(req.body);
        if (error) return res.status(400).send(error.details[0].message); //400 = bad request

        //Retrieve the input from frontend
        const email = req.body.email;
        const plainPassword = req.body.password;

        //Sequalize user -> Retrieve that teacher that matches the criteria
        const teacher = await db.sequelize.models.teachers.findOne({ where: { email } });
        const student = await db.sequelize.models.students.findOne({ where: { user_name: email } });

        if (teacher == null && student == null) {
            res.status(400).json({ message: "User doesn't exist" });
        } else if (teacher) {
            if (await bcrypt.compare(plainPassword, teacher.password)) {
                const accessToken = jwt.sign({ role: 'teacher', email: teacher.email, id: teacher.teacher_id }, process.env.JWT_SECRET);
                res.status(200).cookie('accessToken', accessToken);
                //res.cookie('refreshToken');
                return res.redirect('/teacher_overview');
            } else {
                res.status(400).json({ message: "Wrong password" });
            }
        } else if (student) {
            if (await bcrypt.compare(plainPassword, student.password)) {
                const accessToken = jwt.sign({ role: 'student', email: student.user_name, id: student.student_id }, process.env.JWT_SECRET);
                res.status(200).cookie('accessToken', accessToken);
                return res.redirect('/student_overview');
            } else {
                res.status(400).json({ message: "Wrong password" });
            }
        }



    } catch (error) {
        res.status(500).json({ message: `Error: ${error}` });
    }

});

module.exports = router;

