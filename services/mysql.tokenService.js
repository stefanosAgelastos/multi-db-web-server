const { sequelize } = require("../utilities/db.mysql");

exports.createToken = function (req, res) {

    // here we imagine that we already have the teachersId
    // in the body of the request we expect to have the id of the subject
    // we expect to retun a token

    console.log(req.body)

    res.send();

    return sequelize.transaction(
        {
            autocommit: false,
            isolationLevel: 'REPEATABLE_READ',
        }
    ).then(function (t) {
        return User.create({
            firstName: 'Homer',
            lastName: 'Simpson'
        }, { transaction: t }).then(function (user) {
            return user.addSibling({
                firstName: 'Lisa',
                lastName: 'Simpson'
            }, { transaction: t });
        }).then(function () {
            return t.commit();
        }).catch(function (err) {
            return t.rollback();
        });
    });
}
