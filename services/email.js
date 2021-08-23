const nodemailer = require('nodemailer')
require('dotenv').config()
const nodemailerSendgrid = require('nodemailer-sendgrid')

class EmailService {
    constructor() {
        const transport  = nodemailer.createTransport(nodemailerSendgrid({ apiKey: process.env.SENDGRID_API_KEY }))
        const isActive = process.env.EMAIL_SERVICE_STATUS
        this.transport = transport
        this.isActive = isActive
    }
    async sendEmail(email) {
        try {
            const res = await this.transport.sendEmail(email)
            const status = res?.[0]?.statusCode
            if( status = 202) return {status, email, error: null}
    
            return { status, email, error: res?.[0]?.body}
        } catch (err) {
            console.error(`Errors with email occured: ${ String(err)}`)
            const errors = err?.response?.body?.errors
    
            return { status: 400, email, error: errors || [err]}
            
        }
    }
    async sendPasswordResetEmail() {

    }
    async sendPasswordResetConfirmationEmail() {
        
    }
}


module.exports = EmailService