const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userController = require('../controllers/UserController');
const dbconfig = require('../config/database');

module.exports = function(passport) {
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: dbconfig.secret
    }, function (jwt_payload, done) {
        userController.getUserById(jwt_payload.user._id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }

        });
    }));
}