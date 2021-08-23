const jwt = require('jsonwebtoken')
const crypto = require('crypto')


const generateCryptoToken = (numBytes) => crypto.randomBytes(numBytes).toString('hex')

const generatedPasswordResetToken = () => {
    return {
        token: generateCryptoToken(20),
        expiresAt: new Date(Date.now() + 60*60*1000).toISOString(),
    }
}

module.exports = {
    generatedPasswordResetToken
}
