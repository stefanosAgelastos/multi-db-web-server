const { Router } = require('express');
const express = require('express');
const router = express.Router();

//Modified Path
const path = require('path');
const frontendPath = path.resolve(__dirname, '../frontend/');

router.get('/student_overview', (req, res) => {
    return res.sendFile(frontendPath + '/users/student/student_overview.html');
});

module.exports = router;