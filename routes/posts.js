var express = require('express');
var router = express.Router();

// GET /posts
// This should respond with the full list of blog posts.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET /posts/:id
// This should respond with the matching post by id.
// If the post does not exist, the server should respond
// with a 404 status code.


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
