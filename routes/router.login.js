const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { validateLogin } = require('../util/validate');
const ratelimiter = require('../util/rate-limiter');
const jwt = require('jsonwebtoken');
const db = require('../connectors/db.mysql');

router.post('/login', ratelimiter, async (req, res) => {
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
                const accessToken = jwt.sign({ email: teacher.email, id: teacher.teacher_id }, process.env.JWT_SECRET);
                res.status(200).set('Bearer', accessToken).redirect('/teacher_overview');
            } else {
                res.status(400).json({ message: "Wrong password" });
            }
        } else if (student) {
            if (await bcrypt.compare(plainPassword, student.password)) {
                const accessToken = jwt.sign({ email: student.user_name, id: student.student_id }, process.env.JWT_SECRET);
                res.status(200).set('Bearer', accessToken).redirect('/student_overview');
            } else {
                res.status(400).json({ message: "Wrong password" });
            }
        }



    } catch (error) {
        res.status(500).json({ message: `Error: ${error}` });
    }

});


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (error, teacher) => {
        if (error) return res.sendStatus(403);
        req.teacher = teacher;
        next();
    });

}
// test route
router.get('/auth', authenticateToken, (req, res) => {
    return res.status(500).json({ message: "can you see me?" });
});

module.exports = router;

