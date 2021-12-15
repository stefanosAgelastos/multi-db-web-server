const express = require("express");
const db = require("../connectors/db.mysql");
const router = express.Router();

router.get("/healthcheck", function (req, res) {

    /*
   #swagger.tags = ['operational', 'mysql']
   #swagger.summary = 'get health status of application health and database connectivity'*/

    console.log("Checking db connection health")
    db.sequelize
        .authenticate()
        .then(function (err) {
            res.status(200).send('Connection has been established successfully.');
        })
        .catch(function (err) {
            res.status(500).send('Unable to connect to the database:', error);
        })
})

module.exports = router;
