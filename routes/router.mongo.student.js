const express = require('express');
const router = express.Router();
const Student = require('../mongo/studentModel');

// InsertOne
router.post('/create', async (req, res) => {

    /*
   #swagger.tags = ['student', 'mongo']
   #swagger.summary = 'create a student record in mongo db'
   #swagger.consumes = ['application/json']
   #swagger.parameters['body'] = {
       in: 'body',
       description: 'student details',
       required: true,
       schema: {
           "name": "TariqZ",
           "user_name": "Tariq@kea.dk",
           "password": "12345678",
           "semester": "1",
           "subjects": [
               {
                   "subjects_name": "Database"
               },
               {
                   "subjects_name": "DLS"
               },
               {
                   "subjects_name": "Testing"
               }
           ]
       }
   }*/

    const student = new Student({
        name: req.body.name,
        user_name: req.body.user_name,
        password: req.body.password,
        semester: req.body.semester,
        subjects: req.body.subjects
    })
    try {
        const newStudent = await student.save()
        res.json(newStudent)
    } catch (error) {
        console.log(error)
        res.status(500).send('An error occurred while creating a record')
    }
})
//findAll
router.get('/findAll', async (req, res) => {

    /*
   #swagger.tags = ['student', 'mongo']
   #swagger.summary = 'get all students records from mongo database'*/

    try {

        const students = await Student.find()
        res.json(students)
    } catch (error) {
        res.send('Error' + err)
    }
});

//findOne

router.get('/find/:id', async (req, res) => {

    /*
    #swagger.tags = ['student', 'mongo']
    #swagger.summary = 'find one student from mongo database'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'student id',
        required: true
    } */

    try {
        const students = await Student.findById(req.params.id)
        res.json(students)

    } catch (err) {
        if (err instanceof Error.BadRequest)
            return res.status(HttpStatus.BAD_REQUEST).send({ message: err.message });

        if (err instanceof Error.NotFound)
            return res.status(HttpStatus.NOT_FOUND).send({ message: err.message })
    }
});

// update
router.patch('/update/:id', async (req, res) => {

    /*
    #swagger.tags = ['student', 'mongo']
    #swagger.summary = 'update a student's record details in mongo db'
    #swagger.consumes = ['application/json']
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'student details',
        required: true,
        schema: {
            "name": "TariqZ",
            "user_name": "Tariq@kea.dk",
            "password": "12345678",
            "semester": "1",
            "subjects": [
                {
                    "subjects_name": "Testing"
                },
                {
                    "subjects_name": "Database"
                }
            ]
        }
    }
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'student id',
        required: true
    } */

    try {
        const students = await Student.findById(req.params.id)
        students.name = req.body.name
        students.user_name = req.body.user_name
        students.password = req.body.password
        students.semester = req.body.semester
        students.subjects = req.body.subjects
        const data = await students.save()
        res.json(data)


    } catch (error) {
        console.log(error)
        res.send('Error' + err)

    }

});

// delete
router.get('/delete/:id', async (req, res) => {

    /*
    #swagger.tags = ['student', 'mongo']
    #swagger.summary = 'delete one student from mongo database'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'student id',
        required: true
    } */

    try {
        const students = await Student.findById(req.params.id)
        const data = await students.delete()
        res.json(data)

    } catch (error) {
        console.log(error + 'Student not found')
        res.status(500).send('Error' + err)
    }

});

module.exports = router
