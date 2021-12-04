const express = require('express');
const router = express.Router();
const db = require('../connectors/db.mysql');


// Create and Save a new Teacher
router.post("/createNew", (req, res) => {

    try {
        db.sequelize.models.teachers.create({

            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            department_id: req.body.department_id
        }).then(newTeacher => res.send(newTeacher));
    }
    catch (error) {
        res.status(501).send(error);
    //    console.log('err.name', err.name);
    //    console.log('err.message', err.message);
    //    console.log('err.errors', err.errors);
     //   err.errors.map(e => console.log(e.message))
    }
});

// Retrieve all Teachers from the database.

router.get("/all", (req, res) => {

    db.sequelize.models.teachers.findAll().then(allTeachers => res.send(allTeachers));

});


// Find a single Teacher with an id

router.get("/findOne/:id", (req, res) => {
<<<<<<< HEAD:routes/router.teacherAPI.js
=======
    db.sequelize.models.teachers.findOne({ where: { teacher_id: req.params.id } })
        .then(oneTeacher => {
            if (teacherfound === 0) {
                res.status(404).send("Teacher not found")
            }
            else {
                res.send("Teacher found with ID: " + req.params.id + (teacherfound))
            }
        })
        .catch(err => res.status(500).send('Something went wrong'));
    //res.send(oneTeacher));
>>>>>>> main:routes/teacherAPI.js

    db.sequelize.models.teachers.findOne({ where: { teacher_id: req.params.id } }).then(oneTeacher => res.send(oneTeacher));
});


// Update a teacher by the id 
router.post("/updateOne/:id", (req, res) => {

    const { first_name, last_name, email, department_id, password } = req.body;

    db.sequelize.models.teachers.update({

        first_name,
        last_name,
        email,
        password,
        department_id,
    },
    { where: { teacher_id: req.params.id } }

    ).then(rowsaffected => {
        if (rowsaffected == 0) {
            res.status(404).send("Teacher not found")
        }
        else {
            res.send("Updated teacher with ID: " + req.params.id)
        }
    }).catch(error => {
        console.log(error)
        return res.status(500).send({
            message: 'Unable to update data',
            errors: error
        });
    });
});

// Delete a Teacher by id 
router.post("/delete/:id", (req, res) => {

    db.sequelize.models.teachers.destroy({ where: { teacher_id: req.params.id } })
        .then(rowDeleted => {
            if (rowDeleted == 0) {
                res.status(404).send("Teacher not found");
            }
            else {
                res.send("Deleted teacher with ID: " + req.params.id);
            }
        })
        .catch(err => res.status(500).send('Something went wrong'));

});



module.exports = router