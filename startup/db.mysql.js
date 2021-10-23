const { Sequelize } = require('sequelize');
const { initModels } = require('../models/init-models.js')

// define mysql database connection
const sequelize = new Sequelize({
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'databases',
    database: 'rollcall_db',
    dialect: 'mysql'
});

// define sequelize models'
initModels(sequelize);

// Test connection
sequelize
    .authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.error('Unable to connect to the database:', error);
    })
    .finally(function () {
        console.error("Closing Connection..");
        sequelize.close();
    });

sequelize.models.teachers.findAll()
    .then(function (data, err) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });
