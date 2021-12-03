const express = require("express");
const app = express();

require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 9090;

//Allows the use of JSON (for POST requests)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// load the mysql routers to our app
require("./routes/routes.mysql")(app);

const server = app.listen(PORT, (error) => {
    if(error){
        console.log(`Error on: ${error}`)
    } else {
        console.log(`Listening on port ${PORT}`);
    }
});



mongoose.connect(
    process.env.MDB_CONNECTION,{useNewUrlparser:true})
    const con = mongoose.connection
    
    con.on('open', function (){
        console.log('connected to mongo database !') 
        
    });



module.exports = mongoose
module.exports = server;