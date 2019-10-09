var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {
  db.getAllPosts()
    .then(function(data) {
      res.render('posts', { posts: data });
    }).catch(function(err) {
      res.status(404).send(err);
    });
});

router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id, 10);
  db.getSinglePost(id)
    .then(function(data) {
      console.log(data);
      res.render('post', { post: data[0] });
    }).catch(function(err) {
      res.status(404).send(err);
    });
});


// POST /posts
// This should take the body of the request and add it to the posts.


// PUT /posts/:id
// This should update the matching post item by id with the
// body of the request.  The endpoint should respond with the
// updated item.
// If the matching todo does not exist, the server should respond
// with a 404 status code.


// DELETE /posts/:id
// This should remove the matching post from the list.
// This endpoint should respond with the new length of the list.
// If the matching post does not exist, the server should respond
// with a 404 status code.

module.exports = router;
