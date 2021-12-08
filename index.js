const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require('./connectors/db.mongo');

const PORT = process.env.NODE_DOCKER_PORT || 9090;

//Allows the use of JSON (for POST requests)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server static files
app.use(express.static('frontend', { extensions: ['html'] }))
// load the mysql routers to our app
require("./routes/routes.mysql")(app);


const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error on: ${error}`)
    } else {
        console.log(`Listening on port ${PORT}`);
    }
});

module.exports = server;