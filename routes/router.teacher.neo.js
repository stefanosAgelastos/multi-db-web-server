const express = require('express');
const router = express.Router();
const neo_db = require('../connectors/db.neo');



//endpoint for find all teachers
router.get('/teachers/', async (req, res) => {
    //get all teachers
    try {
        allTeachersObj = await neo_db.session.run(
            'MATCH (t:Teacher) RETURN t'
        )

        const teachers = formatResponse(allTeachersObj);

        if (teachers != null) {
            
            res.status(200).json(teachers);
        } else {
            res.status(400).send('No teachers found')
        }

    } finally {
        // await neo_db.session.close();
    }
    
});

//endpoint for find one teacher
router.get('/teacher/:id', async (req, res) => {  

    const id  = req.params.id;
    const query = `MATCH (n : Teacher) WHERE id(n) = {id} RETURN n`;
    const params = { id: parseInt(id) };
    const temp_teacher = await neo_db.session.run(query, params);

    if (temp_teacher == null) {
        res.status(404).send('Teacher not found')
    } else {
        const teacher = formatResponse(temp_teacher);
        res.status(200).json(teacher);
    }
});


function formatResponse(resultInput) {
    const result = [];
    if (resultInput.records.length > 0) {
        resultInput.records.map(record => {
            result.push(record._fields[0].properties)
        });
    }
    return result;
}

module.exports = router;