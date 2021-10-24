const tokenRouter = require("../routes/token.mysql");

module.exports = function (app) {
    app.use("/sql/token", tokenRouter)
}