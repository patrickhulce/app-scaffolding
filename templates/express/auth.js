module.exports = function (config, app, db) {
  /** Facebook Auth
  var session = require('express-session');
  var passport = require('passport');
  var FacebookStrategy = require('passport-facebook').Strategy;

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: config.uri + '/oauth/facebook'
  }, function (accessToken, refreshToken, profile, done) {
    var data = profile._json;
    db.User.findOrCreate({
        where: {
          email: data.email
        },
        defaults: {
          name: data.name,
          email: data.email,
          access: 'user'
        }
      }).spread(function (user, created) {
        done(null, user);
      });
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (user, done) {
    db.User.findById(user.id).then(function (fullUser) {
      done(null, fullUser);
    });
  });

  app.use(session({ secret: config.secret}));
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/login', passport.authenticate('facebook'));

  app.get('/oauth/facebook', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/failure'
  }));
  */

  /** Stormpath Auth - Assumes STORMPATH API KEY and ID are in env.
  var stormpath = require('express-stormpath');
  app.use(stormpath.init(app, {
    application: process.env.STORMPATH_AUTH_APP_HREF,
    secretKey: config.secret,
    enableFacebook: true,
    social: {
      facebook: {
        appId: process.env.FACEBOOK_APP_ID,
        appSecret: process.env.FACEBOOK_APP_SECRET
      }
    }
  }));
  */
  return {
    loginRequired: function (req, res, next) {
      if (!req.user) res.sendStatus(401);
      else next();
    }
  }
};
