const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


//Path to frontend folder. __dirname alone will only point to current path and not the correct one
const path = require('path');
const db = require('../../startup/db.mysql');
const frontendPath = path.resolve(__dirname, '../../frontend/');
router.use(express.static(frontendPath));


router.get('/login', (req, res) => {
    return res.sendFile(frontendPath + '/login/login.html');
});

router.post('/login', async (req, res) => {
    try {


        const email = req.body.email; 
        const plainPassword = req.body.password;



        const teacher = await db.sequelize.models.teachers.findOne({ where: { email } });

        if(teacher == null){
            res.json({ message: "Wrong email or password" });
        } else {
            if (await bcrypt.compare(plainPassword, teacher.password)) {
                res.json({ message: "Success" });
            } else {
                res.json({ message: "Wrong email or password" });
                res.redirect('/login');
            }
        }
    
        
        return res.json({ message: 'Loginsuccess' })
    


        

    } catch (error) {

    }
    
});

module.exports = router;

