var express = require('express');
var router = express.Router();
var passport = require('../config/passport');

router.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/posts?username='+ req.user.email);
});

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.get('/error', function (req, res) {
  res.send("error logging in");
});

module.exports = router;
