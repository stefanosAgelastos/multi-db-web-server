const express = require('express');
const router = express.Router();
const neo_db = require('../connectors/db.neo');


router.post('/newTeacher', (req, res) => {

    /*
        #swagger.tags = ['teacher', 'neo4j']
        #swagger.summary = 'create a teacher record in neo4j db'
        #swagger.consumes = ['application/json']
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'teacher details',
            required: true,
            schema: {
                "name": "Anders Latif",
                "email": "Latif@kea.dk"
            }
        } */


    try {
        const name = req.body.name;
        const email = req.body.email;
        const params = { name, email }
        const query = `CREATE (n:Teacher {name: $name, email: $email})`

        neo_db.session.run(query, params).
            then(newTeacher => res.status(200).send(newTeacher));
    }
    catch (error) {
        res.status(501).send(error);
    }
});


//endpoint for find all teachers
router.get('/teachers/', async (req, res) => {

    /*
   #swagger.tags = ['teacher', 'neo4j']
   #swagger.summary = 'get all teachers records from neo4j database'*/


    try {
        teachersObj = await neo_db.session.run('MATCH ( t:Teacher ) RETURN t')
        const teachers = formatGeneralResponse(teachersObj);

        if (!teachers) {
            return res.status(400).send('No teachers found');
        } else {
            return res.status(200).json(teachers);

        }

    } catch (err) {
        return res.status(502).send(err);
    }

});

//endpoint for find one teacher
router.get('/teacher/:id', async (req, res) => {

    /*
    #swagger.tags = ['teacher', 'neo4j']
    #swagger.summary = 'find one teacher from neo4j database'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'teacher id',
        required: true
    } */

    try {
        const id = req.params.id;
        const query = `MATCH (n : Teacher) WHERE id(n) = {id} MATCH (n)-[]-(connected) RETURN n, connected`;
        const params = { id: parseInt(id) };
        const temp_teacher = await neo_db.session.run(query, params);

        if (temp_teacher == null) {
            res.status(404).send('Teacher not found')
        } else {

            res.status(200).json(formatSignleTeacher(temp_teacher));
        }

    } catch (error) {
        res.status(501).send('Error finding teachers: ' + error)
        // neo_db.session.close()
    }

});

router.patch('/teacher/:id', async (req, res) => {

    /*
    #swagger.tags = ['teacher', 'neo4j']
    #swagger.summary = 'update a teacher's record details in neo4j db'
    #swagger.consumes = ['application/json']
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'teacher details',
        required: true,
        schema: {
            "name": "Jiayi",
            "email": "Jiayi@KEA.com"
        }
    }
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'teacher id',
        required: true
    } */


    try {
        const id = req.params.id;
        const name = req.body.name;
        const email = req.body.email;
        const params = { id: parseInt(id), name, email }
        const query = `MATCH (n : Teacher) WHERE id(n) = {id} SET n.email = {email} SET n.name = {name} RETURN n`;

        neo_db.session.run(query, params).
            then(updatedTeacher => res.status(200).send(updatedTeacher));
    }
    catch (error) {
        res.status(501).send(error);
    }
});

router.delete('/teacher/:id', async (req, res) => {

    /*
    #swagger.tags = ['teacher', 'neo4j']
    #swagger.summary = 'delete one teacher from neo4j database'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'teacher id',
        required: true
    } */

    try {
        const id = req.params.id;
        const params = { id: parseInt(id) };
        const query = `MATCH (n : Teacher) WHERE ID(n) = {id} DETACH DELETE n`;

        neo_db.session.run(query, params).
            then(deletedTeacher => res.status(200).send('Deleted: ' + JSON.stringify(deletedTeacher.records)));
    } catch (err) {
        return res.status(401).send(err);
    }

});


function formatSignleTeacher(teacherObj) {
    const output = teacherObj.records['length'];
    const myList = [];
    myList[0] = teacherObj.records[0]._fields[0].properties.name;
    for (let i = 0; i < output; i++) {
        myList[i + 1] = teacherObj.records[i]._fields[1].properties.name;
    }
    return myList;
}


function formatGeneralResponse(resultInput) {
    const result = [];
    if (resultInput.records.length > 0) {
        resultInput.records.map(record => {
            result.push(record._fields[0])
        });
    }
    return result;
}

module.exports = router;