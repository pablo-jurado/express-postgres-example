const environment = process.env.NODE_ENV || 'development';
const configuration = require('../config/knexfile')[environment];
const knex = require('knex')(configuration);

function getAllPosts() {
    return knex.select('id', 'title','created').from('posts');
}

function getSinglePost(id) {
    return knex('posts').where('id', id);
}

function findUserByEmail(email) {
    return knex('users').where('email', email);
}

function findUserById(id) {
    return knex('users').where('id', id);
}

module.exports = {
    getAllPosts,
    getSinglePost,
    findUserById,
    findUserByEmail
};
