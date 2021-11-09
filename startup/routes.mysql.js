const router = express.Router();
const createToken = require("../routes/token.mysql");
const gethealthcheck = require("../routes/health_check.mysql");

module.exports = function (app) {
    // assign the router to the app
    app.use("/", router)

    // assign controller classes to the router
    router.post("/sql/health_check", gethealthcheck)
    router.post("/sql/token/", createToken)
}
