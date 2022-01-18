const express = require("express");
const app = express();
require('dotenv').config();

//Allows the use of JSON (for POST requests)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server static files
app.use(express.static('frontend', { extensions: ['html'], index: 'login.html' }))
// load the mysql routers to our app
require("../routes/routes.mysql")(app);

// Load the neo4j routes to our app 
require('../routes/routes.neo')(app);

// load the mysql routers to our app
require("../routes/routes.mongo")(app);


module.exports = app;