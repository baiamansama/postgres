const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "231299",
    host: "localhost",
    port: 5432,
    database: "auth"
})

module.exports = pool;