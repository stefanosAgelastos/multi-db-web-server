const express = require('express');
const router = express.Router();
const neo_db = require('../connectors/db.neo');

//endpoint for find all teachers
router.get('/teachers/', async (req, res) => {
    //get all teachers
    try {
        all_teachers = await neo_db.session.run(
            'MATCH (t:Teacher) RETURN t'
        )

        if (all_teachers != null) {
            
            console.log('find all test', all_teachers)
            res.status(200).json(all_teachers);
        } else {
            res.status(400).send('Can not get Teachers')
        }

    } finally {
        // await neo_db.session.close();
    }

    
    
});

//endpoint for find one teacher
router.get('/teacher/:id', async (req, res) => {

    console.log('test')
    
    const id = req.params;
    
    const query = 'MATCH (n:Teacher) WHERE ID(n) = $id RETURN n.name, n.email';
    const teacher = await neo_db.session.run(query, id);
    console.log(teacher)
    if (teacher == null) {
        res.status(404).send('Teacher not found')
    } else {
        res.status(200).json(teacher);
    }
});

// router.post('/teachers/create', (req, res) => {
//     // Create a person node
//     function addPerson (tx, name) {
//         return tx.run('CREATE (a:Person {name: $name})', { name: name })
//   }
  
// }); 
// router.get('/teacher/:id', async (req, res) => {

//     console.log('test')
    
//     const id = req.params.id;
//     one_teacher = await neo_db.session.run(
//         'MATCH (n:Teachers {id: $id}) RETURN n');
//     console.log(id)
//     const teacherObject = await neo_db(one_teacher, id);

//     if (!teacherObject) {
//         res.statusCode(404).send('Teacher not found')
//     } else {
//         res.statusCode(200).json(teacherObject);
//     }
// });

// await neo_db.driver.close();

module.exports = router;