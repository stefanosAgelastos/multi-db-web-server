const express = require('express');
const router = express.Router();
const neo_db = require('../connectors/db.neo');

function formatResponse(resultInput) {
    const result = [];
    if (resultInput.records.length > 0) {
        resultInput.records.map(record => {
            result.push(record._fields[0].properties)
        });
    }
    return result;
}

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
            res.status(400).send('Can not get Teachers')
        }

    } finally {
        // await neo_db.session.close();
    }

    
    
});

//endpoint for find one teacher
router.get('/teacher/:id', async (req, res) => {
    
    const id  = req.params;
    console.log(id)
    const query = `MATCH (n:Teacher {_id : '${id}'}) RETURN n`;
    
    const temp_teacher = await neo_db.session.run(query, id);
    console.log(temp_teacher)
    if (temp_teacher == null) {
        res.status(404).send('Teacher not found')
    } else {
        const teacher = formatResponse(temp_teacher);
        res.status(200).json(teacher);
        console.log(temp_teacher)
    }
});

// router.post('/teachers/create', (req, res) => {
//     // Create a person node
//     function addPerson (tx, name) {
//         return tx.run('CREATE (a:Person {name: $name})', { name: name })
//   }
  
// }); 
// router.get('/teacher/:id', async (req, res) => {
    
//     const { id } = req.params;
//     console.log(id)
    
//     const query = 'MATCH (n:Teacher) WHERE ID(n) = 27 RETURN n.name, n.email';
//     const idConvert = {id: parseInt(id) }
//     const teacher_out = await neo_db.session.run(query, idConvert);
//     if (teacher_out == null) {
//         res.status(404).send('Teacher not found')
//     } else {
//         const teacher = formatResponse(teacher_out)
//         console.log(teacher)
//         res.status(200).json(teacher);
//     }
// });

// await neo_db.driver.close();

module.exports = router;