const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 9090;

//Allows the use of JSON (for POST requests)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// load the mysql routers to our app
require("./startup/routes.mysql")(app);
require('./routes/auth/auth-routes.js')(app);


const server = app.listen(PORT, (error) => {
    if(error){
        console.log(`Error on: ${error}`)
    } else {
        console.log(`Listening on port ${PORT}`);
    }
});

module.exports = server;