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
router.get('/vocab', auth, async (req, res) => {
    try {
        const vocablist = await pool.query("SELECT * FROM vocab")
        res.json(vocablist.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('servery error')
    }
})
router.post('/vocab', auth, async (req, res) => {
    try {
        const {isKnown, vocab_id} = req.body
        console.log(req.user.id)
        await pool.query(
            "INSERT INTO vocab_vote (isKnown, vote_owner, vote_word) VALUES ($1, $2, $3) RETURNING *",
            [isKnown, req.user.id, vocab_id]
          );
    } catch (err) {
        console.error(err.message)
        res.status(500).send('servery error')
    }
})

router.get('/vocablist', auth, async (req, res) => {
    try {
    vote_owner uuid REFERENCES users(user_id),
        const listy = pool.query('SELECT english, korean, sentence, isKnown FROM vocab_vote INNER JOIN vocab ON vocab_vote.vote_word = vocab.vocab_id WHERE vote_owner = $1;', [req.user.id])
        res.json(listy)
        console.log()
    } catch (err) {
        
    }
})

module.exports = router