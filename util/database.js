const db = require('mysql2');

const pool = db.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-shop',
    password: 'password'
});

module.exports = pool.promise();