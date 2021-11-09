const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Teacher = require('../../models/teachers');

//Path to frontend folder. __dirname alone will only point to current path and not the correct one
const path = require('path');
const frontendPath = path.resolve (__dirname, '../../frontend/');

router.use(express.urlencoded({extended: false}));

//temp storing user info here - to be replacted with DB later
//conswt teachers = [];

router.get('/register', (req, res) => {
    return res.sendFile(frontendPath + '/register/register.html');
});

const db = require("../../startup/db.mysql");

router.post('/register', async (req, res) => {

    //const { username, password, email } = req.body;
    //const newTeacher = new Teacher({ username, password, email });

    //console.log(teachers);  
    
    try {
        await db.sequelize.models.teachers.create({

            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            department_id: req.body.department_id
        }).then(newTeacher => res.send(newTeacher));

        console.log(newTeacher);
    }
    catch (error) {
        res.status(501).send(error);
    }

    //console.log(teachers);
    
    
/*
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        teachers.push({
            id: Date.now().toString(),
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        });
        console.log(teachers);
        return res.redirect('/login');
    } catch (error) {
        res.status(501).send(error);
    }
*/
});




module.exports = router;