const { Sequelize } = require('sequelize');
const { initModels } = require('../models/init-models.js')

// define mysql database connection
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.MYSQLDB_LOCAL_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_SECRET,
    database: process.env.MYSQLDB_DATABASE,
    dialect: 'mysql'
});
 

// define sequelize models
initModels(sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
