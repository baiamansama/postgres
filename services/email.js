const nodemailer = require('nodemailer')
require('dotenv').config()
const nodemailerSendgrid = require('nodemailer-sendgrid')

class EmailService {
    constructor() {
        const apiKey = process.env.SENDGRID_API_KEY
        const transport  = nodemailer.createTransport(nodemailerSendgrid({ apiKey }))
        this.isActive = process.env.EMAIL_SERVICE_STATUS
        this.transport = transport
        this.isActive = process.env.isActive
        this.emailFromAddress = process.env.EMAIL_FROM_ADDRESS
        this.applicationName = 'Nemo'
        this.clientUrl = 'http://localhost:3000'
    }
    async sendEmail(email) {
        try {
            const res = await this.transport.sendMail(email)
            const status = res?.[0]?.statusCode
            if( status = 202) return { status, email, error: null }
    
            return { status, email, error: res?.[0]?.body}
        } catch (err) {
            console.error(`Errors with email occured: ${ String(err)}`)
            const errors = err?.response?.body?.errors
    
            return { status: 400, email, error: errors || [err]}
            
        }
    }

    constructPasswordResetUrl(resetToken){
        return `${this.clientUrl}/password-reset?token=${resetToken.token}`
    }
    async sendPasswordResetEmail(user, token) {
        const resetPasswordUrl = this.constructPasswordResetUrl(token)
        const email = {
            to: user.email,
            from: this.emailFromAddress,
            subject: `Reset your password for ${this.applicationName}`,
            html: `
                <html>
                    <body>
                        <h1>Password Reset Notification</h1>
                        <br />
                        <p> You are receiving this email because you made a request to reset the password of your account</p>
                        <br />
                        <p>Click on the link below to finish the password reset process</p>
                        <a href='${resetPasswordUrl}'>{resetPasswordUrl}</a>
                        <br />
                    </body>
                </html>
            
            `
        }
        return await this.sendEmail(email)



    }
    async sendPasswordResetConfirmationEmail() {
        const email = {
            to: user.user_email,
            from: this.emailFromAddress,
            subject: `Your ${this.applicationName} password has been reset successfully`,
            html: `
                <html>
                    <body>
                        <h1>Password Reset Notification</h1>
                        <br />
                        <p>This is confirmation email to notify you that you have successfully reset your password</p>
                        <br />
                        <p>If you did not reset your password, please contact support team</p>
                        <br />
                    </body>
                </html>  `
    }
    return await this.sendEmail(email)

}
}

module.exports = EmailService