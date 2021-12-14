const mongoose = require('mongoose');

mongoose.connect(
    process.env.MDB_CONNECTION, { useNewUrlparser: true });
    const con = mongoose.connection;
    con.on('open', function () {
    
    console.log('connected to mongo database !');
});

module.exports = mongoose