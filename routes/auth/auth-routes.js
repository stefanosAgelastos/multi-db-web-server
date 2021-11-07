const loginRoute = require('./login');
const registerRoute = require('./register');
const teacherAPI = require('./teacherAPI');


module.exports = function (app) {
    app.use(loginRoute);
    app.use(registerRoute);
    app.use(teacherAPI)
}