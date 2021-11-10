const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require("../../startup/db.mysql");
 
//Modified Path
const path = require('path');
const rateLimiter = require('../util/rate-limiter');
const { validateRegister } = require('../util/validate');
const frontendPath = path.resolve(__dirname, '../../frontend/');


//GET
router.get('/register', (req, res) => {
    return res.sendFile(frontendPath + '/register/register.html');
});

//POST
router.post('/register', rateLimiter, async (req, res) => {

    const { error } = validateRegister(req.body);
    if (error) return res.status(400).send(error.details[0].message); //400 = bad request


    try {

        const { first_name, last_name, email, department_id } = req.body;
        const password = await bcrypt.hash(req.body.password, 10);

        const teacherAlreadyExists = await db.sequelize.models.teachers.findOne({ where: { email } })
            .catch((error) => {
                console.log(error);
            });

        if (teacherAlreadyExists) {
            res.json({ message: 'Teacher with that Email already exists' });
        } else {
            await db.sequelize.models.teachers.create({

                first_name,
                last_name,
                email,
                password,
                department_id,

            }).then(newTeacher => res.send(newTeacher));


        } return res.redirect('/login');
    } catch (error) {
        res.status(501).send(error);
    }
});




module.exports = router;