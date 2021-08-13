const router = require("express").Router()
const pool = require('../../config/db')
const auth = require('../../middleware/auth')

router.get('/', auth, async (req, res) =>{
    try {
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [ req.user.id ])
        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json("server Error")
    }
})


module.exports = router