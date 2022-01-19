const express = require('express');
const router = express.Router();
const Teacher = require('../mongo/teacherModel');

// InsertOne
router.post('/createTeacher', async (req, res) => {

    /*
    #swagger.tags = ['teacher', 'mongo']
    #swagger.summary = 'create a teacher record in mongo db'
    #swagger.consumes = ['application/json']
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'teacher details',
        required: true,
        schema: {
            "name": "David C ",
            "user_name": "DavC@kea.dk",
            "password": "12345678",
            "semester": "SD21i",
            "subjects": [
                {
                    "subjects_name": "Software Designing"
                },
                {
                    "subjects_name": "ITO"
                }
            ]
        }
    } */


    const teacher = new Teacher({
        name: req.body.name,
        user_name: req.body.user_name,
        password: req.body.password,
        semester: req.body.semester,
        subjects: req.body.subjects
    })
    try {
        const newTeacher = await teacher.save()
        res.json(newTeacher)
    } catch (error) {
        console.log(error)
        res.status(500).send('An error occurred while creating a record')
    }
})
//findAll
router.get('/findAllTeacher', async (req, res) => {

    /*
   #swagger.tags = ['teacher', 'mongo']
   #swagger.summary = 'get all teachers records from mongo database'*/

    try {

        const teachers = await Teacher.find()
        res.json(teachers)
    } catch (error) {
        res.send('Error' + err)
    }
});

//findOne

router.get('/findTeacher/:id', async (req, res) => {

    /*
    #swagger.tags = ['teacher', 'mongo']
    #swagger.summary = 'find one teacher from mongo database'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'teacher id',
        required: true
    } */

    try {
        const teachers = await Teacher.findById(req.params.id)
        res.json(teachers)

    } catch (err) {
        if (err instanceof Error.BadRequest)
            return res.status(HttpStatus.BAD_REQUEST).send({ message: err.message });

        if (err instanceof Error.NotFound)
            return res.status(HttpStatus.NOT_FOUND).send({ message: err.message })
    }
});

// update
router.patch('/updateTeacher/:id', async (req, res) => {

    /*
    #swagger.tags = ['teacher', 'mongo']
    #swagger.summary = 'update a teacher's record details in mongo db'
    #swagger.consumes = ['application/json']
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'teacher details',
        required: true,
        schema: {
            "name": "Andrea C",
            "user_name": "Andc@kea.dk",
            "password": "12345678",
            "semester": "SD21i",
            "subjects": [
                {
                    "subjects_name": "Software Pattern"
                },
                {
                    "subjects_name": "DLS"
                },
                {
                    "subjects_name": "Scalability"
                }
            ]
        }
    }
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'teacher id',
        required: true
    } */

    try {
        const teachers = await Teacher.findById(req.params.id)
        teachers.name = req.body.name
        teachers.user_name = req.body.user_name
        teachers.password = req.body.password
        teachers.semester = req.body.semester
        teachers.subjects = req.body.subjects
        const data = await teachers.save()
        res.json(data)

    } catch (error) {
        console.log(error)
        res.send('Error' + err)
    }

});

// delete
router.get('/deleteTeacher/:id', async (req, res) => {

    /*
    #swagger.tags = ['teacher', 'mongo']
    #swagger.summary = 'delete one teacher from mongo database'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'teacher id',
        required: true
    } */

    try {
        const teachers = await Teacher.findById(req.params.id)
        const data = await teachers.delete()
        res.json(data)

    } catch (error) {
        console.log(error + 'Teacher not found')
        res.status(500).send('Error' + err)
    }

});

module.exports = router