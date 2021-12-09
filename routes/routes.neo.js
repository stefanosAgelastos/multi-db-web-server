const teacher_crud = require('../routes/router.teacher.neo');

const neoRoute = 'neo';

module.exports = function (app) {
    app.use(neoRoute + '/teachers', teacher_crud);
}
