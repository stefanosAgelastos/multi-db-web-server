const mongoSRouter = require('./router.mongo.student');

const baseRoute = '/mongo';

module.exports = function (app) {

    app.use(baseRoute + '/student', mongoSRouter);

}