const express = require('express');
const router = express.Router();
const db = require('../connectors/db.mysql');


  router.get("/statics", (req, res) => {

    db.sequelize.models.students_presence.findAll().then(allstudents_presence => res.send(allstudents_presence));

});



function renderHTML(myData)
{
    const mainContainer = document.getElementById("myData");
    for (let i = 0; i < myData.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = 'Student Id' + myData[i].student_id + 'Subject Id' + myData[i].punchline  + 'Presence_key_id' + myData[i].presence_key_id + 'Semester' + myData[i].semester+ 'Date Time' + myData[i].current_datetime;
        mainContainer.appendChild(div);
   }
}



module.exports = router;