
const db = require("../startup/db.mysql");



describe('database connection', () => {


    test('Default value is false', () => {
        expect.assertions(1);

        return db.sequelize
            .authenticate()
            .then(function (err) {
                expect(true).toBe(true);
            })
            .catch(function (err) {
                expect(true).toBe(false);
            });
    });

})

