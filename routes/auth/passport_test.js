const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth-test', passport.authenticate('jwt', { session: false }), 
(req, res) => {
    return res.json({ message: 'You are authorized to see this message' });
});

module.exports = router;