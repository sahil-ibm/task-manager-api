const sgMail = require('@sendgrid/mail')

const sgAPI = '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'

sgMail.setApiKey(sgAPI)

sgMail.send({
    to: 'sahil.infy1@gmail.com',
    from: 'sahil.infy1@gmail.com',
    subject: 'Testing',
    text: 'Hope this gets to you.'
})