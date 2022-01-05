const express = require('express');
const router = express.Router();
const Teacher = require('../mongo/teacherModel');

// InsertOne
router.post('/createTeacher', async (req, res) => {
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
    try {

        const teachers = await Teacher.find()
        res.json(teachers)
    } catch (error) {
        res.send('Error' + err)
    }
});

//findOne

router.get('/findTeacher/:id', async (req, res) => {
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