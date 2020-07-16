const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const User = require('./Schema/User');

passport.serializeUser(function (user, done) {
  return done(null, user);
});

passport.deserializeUser(function (id, done) {
  return done(err, user);
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_API_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: 'http://localhost:5000/auth/twitter/callback',
      userProfileURL:
        'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
    },
    function (token, tokenSecret, profile, done) {
      const { name, email } = profile._json;

      User.find({ email }).then((user) => {
        if (user.length) {
          return done(null, user[0]);
        } else {
          let userConfig = {
            name,
            email,
          };
          const user = new User(userConfig);
          user
            .save()
            .then((res) => {
              return done(null, user);
            })
            .catch((err) => {
              return done(err);
            });
        }
      });
    }
  )
);
