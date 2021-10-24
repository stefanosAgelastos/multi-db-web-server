const tokenRouter = require("../routes/token.mysql");
const healthCheckRouter = require("../routes/health_check.mysql");

module.exports = function (app) {
    app.use("/sql/token", tokenRouter)
    app.use("/sql/health_check", healthCheckRouter)
}
