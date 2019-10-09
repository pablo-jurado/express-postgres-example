var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('./db');

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

passport.use(new LocalStrategy({
  usernameField: 'email',
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
      return done(err);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.findUserById(id)
    .then(function(user) {
      console.log(user);
      cb(null, user);
    }).catch(function(err) {
      cb(err, null);
    });
});

app.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.email);
});

app.get('/', function(req, res, next) {
  res.render('login');
});

app.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});


app.get('/success', function(req, res) {
    res.send("Welcome " + req.query.username + "!!");
});

app.get('/error', function (req, res) {
  res.send("error logging in");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
