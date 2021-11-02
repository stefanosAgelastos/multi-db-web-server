const loginRoute = require('./login');
const registerRoute = require('./register');

module.exports = function (app) {
    app.use(loginRoute);
    app.use(registerRoute);
}