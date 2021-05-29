const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


exports.contactForm = (req, res) => {
    const {authorEmail ,email, name, message} = req.body

    let maiList = [authorEmail, process.env.EMAIL_TO]

    const emailData = {
        to: maiList,
        from: email,
        subject: `Someone message you from ${process.env.APP_NAME}`,
        text: `Email received from contact form \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
        html: `
            <h4>Message received form: </h4>
            <p>Sender name: ${name}</p>
            <p>Sender email: ${email}</p>
            <p>Sender message: ${message}</p>
            <hr/>
            
            <p>This email may contain sensitive information</p>
            <p>https://blog.com</p>
        `
    };

    sgMail.send(emailData).then(() => {
        console.log('Message sent')
        return res.json({
            success: true,
        })
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
}


exports.contactBlogAuthorForm = (req,res) => {
    const {email, name, message} = req.body
    const emailData = {
        to: process.env.EMAIL_TO,
        from: req.body.email,
        subject: `Contact form - ${process.env.APP_NAME}`,
        text: `Email received from contact form \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
        html: `
            <h4>Email received from contact form: </h4>
            <p>Sender name: ${name}</p>
            <p>Sender email: ${email}</p>
            <p>Sender message: ${message}</p>
            <hr/>
            
            <p>This email may contain sensitive information</p>
            <p>https://blog.com</p>
        `
    };

    sgMail.send(emailData).then(() => {
        console.log('Message sent')
        return res.json({
            success: true,
        })
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
}
