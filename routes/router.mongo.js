const mongoSRouter = require('./router.mongoStudent');

const baseRoute = '/mongo';

module.exports = function (app) {

    app.use(baseRoute, '/student', mongoSRouter);

}