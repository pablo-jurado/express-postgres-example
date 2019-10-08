exports.up = function(knex) {
    let query = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            first_name TEXT NOT NUll,
            last_name TEXT NOT NUll,
            email TEXT NOT NUll,
            "password" TEXT NOT NUll,
            created DATE NOT NUll
        )`;

    return knex.raw(query);
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE users');
};
