const express = require('express');
const router = express.Router();
const db = require('../connectors/db.mysql');


// Create and Save a new Teacher
router.post("/createNew", (req, res) => {

     /*
    #swagger.tags = ['teacher', 'mysql']
    #swagger.summary = 'create a teacher record in mysql database'
    #swagger.consumes = ['application/json']
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'teacher details',
        required: true,
        schema: {
            "first_name": "John",
            "last_name": "Doeh",
            "email": "sage@test.com",
            "password": "12345678",
            "department_id": 2
        }
    } */

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
});

// Retrieve all Teachers from the database.

router.get("/all", (req, res) => {

    /*
   #swagger.tags = ['teacher', 'mysql']
   #swagger.summary = 'get all teachers records from mysql database'*/


    db.sequelize.models.teachers.findAll().then(allTeachers => res.send(allTeachers));

});


// Find a single Teacher with an id

router.get("/findOne/:id", (req, res) => {

    /*
    #swagger.tags = ['teacher', 'mysql']
    #swagger.summary = 'find one teacher from mysql database'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'teacher id',
        required: true
    } */

    db.sequelize.models.teachers.findOne({ where: { teacher_id: req.params.id } })
        .then(oneTeacher => {
            if (!oneTeacher) {
                res.status(404).send("Teacher not found")
            }
            else {
                res.send(oneTeacher.toJSON())
            }
        })
        .catch(err => res.status(500).send('Something went wrong'));
});


// Update a teacher by the id 
router.post("/updateOne/:id", (req, res) => {

    /*
    #swagger.tags = ['teacher', 'mysql']
    #swagger.summary = 'update a teacher's record details in mysql db'
    #swagger.consumes = ['application/json']
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'teacher details',
        required: true,
        schema: {
            "first_name": "John",
            "last_name": "Doeh",
            "email": "sage@test.com",
            "password": "12345678",
            "department_id": 2
        }
    }
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'teacher id',
        required: true
    } */

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

    /*
    #swagger.tags = ['teacher', 'mysql']
    #swagger.summary = 'delete one teacher from mysql database'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'teacher id',
        required: true
    } */

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