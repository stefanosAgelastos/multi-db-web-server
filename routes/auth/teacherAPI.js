const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require("../../startup/db.mysql");
const teachers = require('../../models/teachers');



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
    }

})



// Retrieve all Teachers from the database.

router.get("/all", (req, res) => {
    db.sequelize.models.teachers.findAll().then(allTeachers => res.send(allTeachers));

});


// Find a single Teacher with an id

router.get("/findOne/:id", (req, res) => {
    db.sequelize.models.teachers.findOne({ where: { teacher_id: req.params.id } }).then(oneTeacher => res.send(oneTeacher));

});

//.then(updateTeacher => res.send(updateTeacher));


// Update a teacher by the id 
router.post("/updateTeacher/:id", (req, res) => {
    db.sequelize.models.teachers.findOne({ where: { teacher_id: req.params.id }}).then(
    //.then(oneTeacher => res.send(oneTeacher));

    try {
        db.sequelize.models.teachers.update({

            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            department_id: req.body.department_id
        })
    } 

    catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'Unable to update data',
            errors: error,
            status: 400
        });
    }
    )
})


/*

// Delete a Teacher by id 
sequelize.delete = (req, res) => {
  
};

 */
module.exports = router