var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../db');

const strategy = new LocalStrategy({
    usernameField: 'email'
  },
  function(email, password, done) {
    db.findUserByEmail(email)
      .then(function(result) {
        const user = result[0];
        if (user && user.password === password) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch(function(err) {
        console.log('findUserByEmail err:', err);
        return done(err);
      });
    }
);

passport.use(strategy);
  
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    db.findUserById(id)
        .then(function(user) {
            done(null, user[0]);
        }).catch(function(err) {
            console.log('deserializeUser err:', err);
            done(err, null);
    });
});

module.exports = passport;