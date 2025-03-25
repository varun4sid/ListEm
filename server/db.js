const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "project",
    host: "localhost",
    port: 5432,
    database: "listem",
});

module.exports = pool;
