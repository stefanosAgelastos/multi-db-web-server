const express = require('express');
const router = express.Router();
const neo_db = require('../connectors/db.neo');

// We will modify (keep, add or delete) & refactor the following once they work properly
router.get('/test', (req, res) => {
    res.json({test: 'testing'});
})
//endpoint for find all teachers
router.get('/teachers/all', async (req, res) => {
    //get all teachers
    try {
        all_teachers = await neo_db.session.run(
            'MATCH (t:Teacher) RETURN t'
        )

        if (all_teachers != null) {
            res.status(200).json(all_teachers);
        } else {
            res.status(401).send('Failed')
        }

    } finally {
        await neo_db.session.close();
    }

    await neo_db.driver.close();
    
});

// //endpoint for find one teacher
// router.get('/teacher/:id', async (req, res) => {
//     //get 1 teacher
//     const { id } = req.params;
//     //To-be-modified. Queries should not be hardcoded
//     const query = 'MATCH (n:Teachers {id: $id}) RETURN n limit 5';
//     const params = { id: parseInt(id) };
//     const teacherObject = await neo_db(query, params);
//     res.send(teacherObject);
// });

module.exports = router;