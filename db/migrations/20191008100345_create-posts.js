
exports.up = function(knex) {
    let query = `
        CREATE TABLE posts (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NUll,
            content TEXT NOT NUll,
            created DATE NOT NUll,
            user_id INT NOT NULL REFERENCES users
        )`
    return knex.raw(query);
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE posts');
};
