var express = require('express');
const router = express.Router();
const { createToken } = require("../services/mysql.tokenService");
const { gethealthcheck } = require("../services/mysql.health_check");

module.exports = function (app) {
    // assign the router to the app
    app.use("/sql", router)

    // assign controller classes to the router
    router.get("/health_check", gethealthcheck)
    router.post("/token", createToken)
}
