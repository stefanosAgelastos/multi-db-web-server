
const db = require("../startup/db.mysql");

describe('database connection', () => {

    test('Test that the connection promise resolves', () => {
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
