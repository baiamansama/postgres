const EmailService = require('./email')
require('dotenv').config()
const emailService = new EmailService({
    isActive: process.env.EMAIL_SERVICE_STATUS,
    apiKey: process.env.SENDGRID_API_KEY
})

module.exports = { emailService}