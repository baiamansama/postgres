const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgress",
    password: "231299",
    host: "localhost",
    port: 5432,
    database: "auth"
})