const passport=require('passport');
const process = require('process');
require("dotenv").config();
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


//clientID:     GOOGLE_CLIENT_ID,
//clientSecret: GOOGLE_CLIENT_SECRET,


passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null,profile)
  }
));
passport.serializeUser(function(user,done){
    done(null,user)
});
passport.deserializeUser(function(user,done){
    done(null,user)
});