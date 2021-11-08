const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

//Path to frontend folder. __dirname alone will only point to current path and not the correct one
const path = require('path');
const frontendPath = path.resolve (__dirname, '../../frontend/');
router.use(express.static(frontendPath));

router.use(express.urlencoded({extended: false}));

//temp storing user info here - to be replacted with DB later
const users = [];

router.get('/register', (req, res) => {
    return res.sendFile(frontendPath + '/register/register.html');
});

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword
        });
        console.log(users);
        return res.redirect('/login');
    } catch (error) {
        res.status(501).send(error);
    }
});


module.exports = router;