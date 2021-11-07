const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require("../../startup/db.mysql");





/* Create and Save a new Teacher
sequelize.create = (req, res) => {

  
}; */

// Retrieve all Teachers from the database.

router.get("/all",(req,res)=>{
    db.sequelize.models.teachers.findAll().then(allTeachers =>res.send(allTeachers));
  
});
/*
// Find a single Teacher with an id
sequelize.findOne = (req, res) => {
  
};

// Update a teacher by the id 
sequelize.update = (req, res) => {
  
};



// Delete a Teacherl with the specified id in the request
sequelize.delete = (req, res) => {
  
};

// Delete all Teashers from the database.
sequelize.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
sequelize.findAllPublished = (req, res) => {
  
};
 */
module.exports =router