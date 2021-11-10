const passport = require('passport');
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const db = require("../../startup/db.mysql");





passport.use(
    new StrategyJwt(
        {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: process.env.JWT_SECRET,
        },
        (jwtPayload, done) => {
            return db.sequelize.models.teachers.findOne({ where: { email: jwtPayload.email } })
            .then((teacher) => {
                //console.log('My output', teacher)
                return done(null, teacher);
            })
            .catch((error) => {
                return done(error);
            });
        }
    )

);

