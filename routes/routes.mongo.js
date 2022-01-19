const mongoSRouter = require('./router.mongo.student');
const mongoTRouter = require('./router.mongo.teacher');

const baseRoute = '/mongo';

module.exports = function (app) {

    app.use(baseRoute + '/student', mongoSRouter);
    app.use(baseRoute + '/teacher', mongoTRouter);

}