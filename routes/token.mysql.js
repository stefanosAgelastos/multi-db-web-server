const express = require("express");
const db = require("../startup/db.mysql");
const router = express.Router();

router.post("/", function (req, res) {
    db.sequelize.models.teachers.findAll()
        .then(function (data, err) {
            res.status(200).send(data)
        })
        .catch(function (err) {
            res.status(500).send(err)
        });
})

module.exports = router;
