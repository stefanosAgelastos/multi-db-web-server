const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { validateLogin } = require('../util/validate');
const ratelimiter = require('../util/rate-limiter');
const jwt = require('jsonwebtoken');

//Path to frontend folder. __dirname alone will only point to current path and not the correct one
const path = require('path');
const db = require('../../startup/db.mysql');
const frontendPath = path.resolve(__dirname, '../../frontend/');
router.use(express.static(frontendPath));


router.get('/login', (req, res) => {
    return res.sendFile(frontendPath + '/login/login.html');
});

router.post('/login', ratelimiter, async (req, res) => {
    try {

        const { error } = validateLogin(req.body);
        if (error) return res.status(400).send(error.details[0].message); //400 = bad request

        const email = req.body.email;
        const plainPassword = req.body.password;

        const teacher = await db.sequelize.models.teachers.findOne({ where: { email } });

        if (teacher == null) {
            res.json({ message: "Wrong email or password" });

            // to be used later when web-app is functional
            //res.status(404).redirect('/login');
        } else {
            if (await bcrypt.compare(plainPassword, teacher.password)) {
                const jwtToken = jwt.sign({ email: teacher.email }, process.env.JWT_SECRET);
                res.status(200).json({ message: "Logged in!", token: jwtToken });
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

module.exports = router;

