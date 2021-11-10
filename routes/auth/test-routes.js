const test_route = require('./passport_test');

module.exports = function (app) {
    app.use(test_route);
}