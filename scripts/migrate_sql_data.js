const db = require('../connectors/db.mysql');
const Student = require('../mongo/studentModel');

// this is part of an unfinished task
// the idea is to transform the data from the mysql database from staging
// and load the data to the mongo database
// when we deploy to the staging environment