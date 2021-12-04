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


    try {

        const { first_name, last_name, email, department_id } = req.body;
        const password = await bcrypt.hash(req.body.password, 10);

        const teacherAlreadyExists = await db.sequelize.models.teachers.findOne({ where: { email } })
            .then()
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
            })
                .then(res.redirect('/sql/login'))
                .catch();

        }
    }
    catch (err) {
        if (err.name === 'SequelizeForeignKeyConstraintError') {
            res.status(409).json('Invalid department');
            throw err;
        } else {
            return res.status(405).json('Registration failed');
        }
    }
});

module.exports = router;