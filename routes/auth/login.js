const express = require('express');
const router = express.Router();

//Path to frontend folder. __dirname alone will only point to current path and not the correct one
const path = require('path');
const frontendPath = path.resolve (__dirname, '../../frontend/');
router.use(express.static(frontendPath));


router.get('/login', (req, res) => {
    return res.sendFile(frontendPath + '/login/login.html');
});

module.exports = router;

