var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;
const User = require('../models/user')

// setup passport
passport.use(new BearerStrategy(
  async function(token, done) {
    try {
      const user = await User.find({token: token})

      if (user.length == 0) {
        return done(null, false)
      }
      
      return done(null, user)
    } catch (err) {
      return done(null, false)
    }
  }
));

module.exports = passport
