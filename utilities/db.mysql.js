const { Sequelize } = require('sequelize');
const { initModels } = require('../models/init-models.js')

console.log("here")

// define mysql database connection
const sequelize = new Sequelize({
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'databases',
    database: 'rollcall_db',
    dialect: 'mysql'
});

// define sequelize models
initModels(sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
