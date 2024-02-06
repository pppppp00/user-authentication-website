// Install required packages:
// npm install express passport passport-github express-session

const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');

const app = express();

app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// قم بتعويض هذه المعلومات ببيانات GitHub OAuth الخاصة بك
const GITHUB_CLIENT_ID = 'your-github-client-id';
const GITHUB_CLIENT_SECRET = 'your-github-client-secret';

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // هنا، عادةً ما ستقوم بحفظ المستخدم في قاعدة البيانات الخاصة بك
    // لأغراض التبسيط، سنقوم بتخزين ملف الشخصية من GitHub في الجلسة
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/
