const express = require('express');
const router = express.Router();
const neo_db = require('../connectors/db.neo');

// We will modify (keep, add or delete) & refactor the following once they work properly



//endpoint for find all teachers
router.get('/teachers', (req, res) => {
    //get all teachers
});

//endpoint for find one teacher
router.get('/teacher/:id', async (req, res) => {
    //get 1 teacher
    const { id } = req.params;
    //To-be-modified. Queries should not be hardcoded
    const query = 'MATCH (n:Teachers {id: $id}) RETURN n limit 5';
    const params = { id: parseInt(id) };
    const teacherObject = await neo_db(query, params);
    res.send(teacherObject);
});