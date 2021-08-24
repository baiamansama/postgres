const { reset } = require("nodemon")
const pool = require("../config/db")
const bcrypt = require('bcrypt')

class User {
    static makePublicUser(user){
        return {
            userid: user.user_id,
            email: user.user_email,
            username: user.user_name,
            createdAt: user.created_at
        }
    }

    static async savePasswordResetToken(user_email, resetToken) {
        const result = await pool.query(
            'UPDATE users SET pw_reset_token = $1, pw_reset_token_exp = $2 WHERE user_email = $3 RETURNING user_id, user_name, created_at, user_email;', [resetToken.token, resetToken.expiresAt, user_email])
            const user = result.rows[0]
            if (user) return User.makePublicUser(user)
    }

    static async resetPassword(token, password) {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt)
        const result = await pool.query(' UPDATE users SET user_password = $1, pw_reset_token = NULL, pw_reset_token_exp = NULL WHERE pw_reset_token = $2 AND pw_reset_token_exp > NOW() RETURNING user_id, user_email, user_name, created_at;', [hashedPassword, token])
        const user = result.rows[0]
        console.log(user)
        if(user) return user.makePublicUser(user)
        throw 'This token either expired or invalid'
    }
}

module.exports = User