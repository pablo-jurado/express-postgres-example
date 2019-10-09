var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('users', { title: 'This is the Users page' });
});

module.exports = router;
