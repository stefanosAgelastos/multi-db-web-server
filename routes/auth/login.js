const express = require('express');
const router = express.Router();

//Path to frontend folder. __dirname alone will only point to current path and not the correct one
const path = require('path');
const db = require('../../startup/db.mysql');
const frontendPath = path.resolve (__dirname, '../../frontend/');
router.use(express.static(frontendPath));


router.get('/login', (req, res) => {
    return res.sendFile(frontendPath + '/login/login.html');
});

router.post('/login', async (req, res) => {
    try{

        //initialize variables with value from .body.username and password
        const email = req.body.email;
        const plainPassword = req.body.password;

        const userInfo = await db.sequelize.models.teachers.findOne({ where: { email }});
        console.log(userInfo[0][0])
        /*
        if (userInfo[0][0] === undefined || userInfo[0][0].length === 0) {
            res.status(404).send(`User: ${username} not found!`);
            return res.redirect('/login');

        } else if (await bcrypt.compare(plainPassword, userInfo[0][0].password)) {
            console.log(userInfo);
        }
        */
    } catch(error) {

    }
});

module.exports = router;

