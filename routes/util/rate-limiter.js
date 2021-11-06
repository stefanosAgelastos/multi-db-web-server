const rateLimiter = require('express-rate-limit');

module.exports = rateLimiter({
    windowMS: 10 * 60 * 1000, //keeps the attempts 'logged' for 10 min
    max: 10, //Max attempts
    message: 'Too many attempts. Try again later',
    statusCode: 429 //code for too many requests   
});