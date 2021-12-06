
const healthCheckRouter = require('./router.healthCheck');
const loginRoute = require('./router.login');
const registerRoute = require('./router.register');

const baseRoute = '/sql';

module.exports = function (app) {
    app.use(baseRoute, healthCheckRouter)
    app.use(baseRoute, loginRoute);
    app.use(baseRoute, registerRoute);
}
