const loginRoute = require('./login');
const registerRoute = require('./register');
const updateRoute = require('./update');

module.exports = function (app) {
    app.use(loginRoute);
    app.use(registerRoute);
    app.use(updateRoute);
}