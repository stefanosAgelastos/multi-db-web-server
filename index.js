const express = require("express");
const app = express();
const db = require("./models/teachers");
require('dotenv').config();
const PORT = process.env.PORT || 9090;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// load the mysql routers to our app
require('./startup/routes.mysql')(app);
require('./routes/auth/auth-routes.js')(app);

const teacherAPI =require("./routes/auth/teacherAPI");


const server = app.listen(PORT, (error) => {
    if(error){
        console.log(`Error on: ${error}`)
    } else {
        console.log(`Listening on port ${PORT}`);
    }
});
module.exports = server;