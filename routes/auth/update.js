const express = require('express');
const router = express.Router();
const db = require("../../startup/db.mysql");

router.get('/update/:teacher_id', async (req, res) => {
    const { first_name, last_name, email, department_id, password } = req.body;
    const id = req.params.teacher_id;
    const findTeacher = await db.sequelize.models.teachers.findOne({ where: { teacher_id: id } })

    return res.send(findTeacher)
});


//POST
router.post('/update/:teacher_id', async (req, res) => {

    const { first_name, last_name, email, department_id, password } = req.body;
    const id = req.params.teacher_id;
    const findTeacher = await db.sequelize.models.teachers.findOne({ where: { teacher_id: id } })



    findTeacher.update({
        first_name,
        last_name,
        email,
        password,
        department_id,
    }).then(updatedTeacher => res.send(updatedTeacher))
        .catch(error => {
            console.log(error);
            res.status(404).send(error);
        });


    console.log(updatedTeacher)
    res.json(findTeacher);

});

module.exports = router;