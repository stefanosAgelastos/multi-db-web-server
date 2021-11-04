const db = require("../startup/db.mysql");


module.exports = async () => {
    console.log("Jest global setup")
    // Set reference to sequelize in order to close the server during teardown.
    global.__DB__ = db;
};