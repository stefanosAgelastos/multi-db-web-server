const { Sequelize } = require('sequelize');
const { initModels } = require('../models/init-models.js')

// define mysql database connection
const sequelize = new Sequelize({

    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    username:process.env.DB_USER,
    password:process.env.DB_SECRET,
    database:process.env.DB_NAME,
    dialect: 'mysql'
});
 

// define sequelize models
initModels(sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
