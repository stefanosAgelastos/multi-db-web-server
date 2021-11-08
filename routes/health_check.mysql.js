const db = require("../startup/db.mysql");

exports.gethealthcheck = function (req, res) {
    console.log("Checking db connection health")
    db.sequelize
        .authenticate()
        .then(function (err) {
            res.status(200).send('Connection has been established successfully.')
        })
        .catch(function (err) {
            res.status(500).send('Unable to connect to the database:', error);
        });
}
