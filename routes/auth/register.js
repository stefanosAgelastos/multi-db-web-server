const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require("../../startup/db.mysql");


//Modified Path
const path = require('path');
const frontendPath = path.resolve(__dirname, '../../frontend/');
//Middleware to parse incoming requests
router.use(express.urlencoded({ extended: false }));

//GET
router.get('/register', (req, res) => {
    return res.sendFile(frontendPath + '/register/register.html');
});

//POST
router.post('/register', async (req, res) => {


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
            

        }return res.redirect('/login');
    } catch (error) {
        res.status(501).send(error);
    }
});




module.exports = router;