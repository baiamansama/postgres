const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { createUserJwt, generatePasswordResetToken, generatedPasswordResetToken} = require('../../utils/tokens')
const User= require('../../models/user')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')
const config = require('config')
const pool = require('../../config/db')
const { emailService } = require('../../services')


router.get('/', auth, async (req, res) => {
    try {
      const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [req.user.id])    
      res.json(user)
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // @route    POST api/auth
  // @desc     Authenticate user & get token
  // @access   Public
  router.post(
    '/',
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
  
      try {
        let user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email])
        if (user.rows.length === 0) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
  
        const isMatch = await bcrypt.compare(password, user.rows[0].user_password);
  
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
  
        const payload = {
          user: {
            id: user.rows[0].user_id
          }
        };
  
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: '5 days' },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );

  router.post('/recover', async ( req, res) =>{
    try {
      const { email } = req.body
      const token = generatedPasswordResetToken()
      const user = await User.savePasswordResetToken(email, token)
      console.log(user)
      if(user){
        await emailService.sendPasswordResetEmail(user, token)
      }
      return res.status(200).json({ message: 'if you have an account, so it is working'})
    } catch (error) {
      console.error(error.message)
    }
  })

  router.post('/password-reset', async ( req, res) =>{
    try {
      const { token } = req.query
      const { password } = req.body
      const user = await User.resetPassword(token, password)
      if(user){
        await emailService.sendPasswordResetConfirmationEmail(user)
      }
      return res.status(200).json({ message: 'Password successfully reset'})
    } catch (error) {
      console.error(error.message)
    }
  })
  router.delete('/', async ( req, res) =>{
    try {
      console.log(req.body)
      await pool.query('DELETE FROM users WHERE user_email = $1;', [req.body.email]) 
      res.json("user deleted")
    } catch (error) {
      console.error(error.message)
    }
  })
  
  module.exports = router;