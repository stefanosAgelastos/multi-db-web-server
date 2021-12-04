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

        if (teacher == null) {
            res.json({ message: "Teacher doesn't exist" });

            // to be used later when web-app is functional
            //res.status(404).redirect('/login');
        } else {
            if (await bcrypt.compare(plainPassword, teacher.password)) {
                const accessToken = jwt.sign({ email: teacher.email, id: teacher.teacher_id }, process.env.TOKEN_SECRET);
                // const refreshToken = jwt.sign({ email: teacher.email, id: teacher.teacher_id}, process.env.REFRESH_TOKEN_SECRET);
                res.status(200).set('Bearer', accessToken).send(`Welcome ${teacher.email} with the ID: ${teacher.teacher_id}`);
                //return res.status(200).redirect('/overview');

            } else {
                res.json({ message: "Wrong email or password" });
                //res.redirect('/login');
            }
        }



    } catch (error) {
        res.json({ message: `Error: ${error}` });
        //res.status(404).redirect('/login');
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
    return res.json({ message: "can you see me?" });
});

module.exports = router;

