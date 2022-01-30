const express = require("express");
const swaggerUi = require('swagger-ui-express')
const app = express();
require('dotenv').config();
const mongoose = require('../connectors/db.mongo');
const { authenticateToken } = require('../util/authenticate');

//Allows the use of JSON (for POST requests)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/teacher_overview', authenticateToken('teacher'), (req, res, next) => {
    next();
});

app.get('/student_overview', authenticateToken('student'), (req, res, next) => {
    next();
});

// server static files
app.use(express.static('frontend', { extensions: ['html'], index: 'login.html' }))
// load the mysql routers to our app
require("../routes/routes.mysql")(app);

// Load the neo4j routes to our app 
require('../routes/routes.neo')(app);

// load the mongo routers to our app
require("../routes/routes.mongo")(app);

// load the swagger documentation endpoint to our app
const swaggerFile = require('../docs/swagger-output.json');
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;