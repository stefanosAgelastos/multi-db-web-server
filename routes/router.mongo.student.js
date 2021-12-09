const express = require('express');
const router = express.Router();
const Student = require('../mongo/studentModel');

// InsertOne
router.post('/create', async (req, res) => {
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
    }catch(error){
        console.log(error)
        res.send('Error')
    }
})
//findAll
router.get('/findAll', async (req, res) => {
    try {

        const students = await Student.find()
        res.json(students)
    } catch (error) {
        res.send('Error' + err)
    }
});

//findOne

router.get('/find/:id', async (req, res) => {
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
    try {
        const students = await Student.findById(req.params.id)
        students.name = req.body.name,
            students.user_name = req.body.user_name,
            students.password = req.body.password,
            students.semester = req.body.semester
            students.Subject[
                req.body.Subject
            ]
        const data = await students.save()
        res.json(data)

    } catch (error) {
        res.send('Error' + err)
    }

});

// delete
router.get('/delete/:id', async (req, res) => {
    try {
        const students = await Student.findById(req.params.id)
        const data = await students.delete()
        res.json(data)

    } catch (error) {
        res.send('Error' + err)
    }

});

module.exports = router
