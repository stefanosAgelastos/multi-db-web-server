const express = require("express");
const app = express();

// load the mysql routers to our app
require("./startup/routes.mysql")(app);


const port = 8080;
const server = app.listen(port, () =>
    console.info(`listening on port ${port}...`)
);

module.exports = server;