const { Sequelize } = require('sequelize');
const { initModels } = require('../models/init-models.js')

console.log("here")

// define mysql database connection
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_SECRET,
    database: process.env.DB_NAME,
    dialect: 'mysql'
});

//Synchronizes the models each time the application is started
//sequelize.sync(); 

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to DB established successfully');
    } catch (error) {
        console.log(`Unable to connect to DB: ${error}`);
    }
});
// define sequelize models
initModels(sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;



