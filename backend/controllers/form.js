const sgMail = require('@sendgrid/mail')
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const formDataMessage = require('../models/formDataM')
const {dbErrorHandler} = require("../helpers/dbErrosHelper");

// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID
const CLEINT_SECRET = process.env.CLEINT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});


// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 465,
//     secure: true,
//     service: 'gmail',
//     auth: {
//         type: 'OAuth2',
//         user: process.env.MAIL_USERNAME,
//         pass: process.env.MAIL_PASSWORD,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//         accessToken: process.env.OAUTH_ACCESS_TOKEN,
//     }
// });

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});



exports.contactForm = (req, res) => {
    const {authorEmail, email, name, lastName, message, clientEmail} = req.body
    console.log(req.body)
    // let maiList = [authorEmail, process.env.EMAIL_TO]
    const emailData = {
        to: process.env.MAIL_USERNAME,
        from: email,
        subject: `${name} message you from ${process.env.APP_NAME}`,
        text: `Email received from contact form \n Sender name: ${name} \n Sender email: ${clientEmail} \n Sender message: ${message}`,
        html: `
            <h4>Message received form: </h4>
            <p>Sender name: ${name}</p>
            <p>Sender lastName: ${lastName}</p>
            <p>Sender email: ${clientEmail}</p>
            <p>Sender message: ${message}</p>
            <hr/>
            
            <p>This email may contain sensitive information</p>
            <p>https://blog.com</p>
        `
    };
    transporter.sendMail(emailData).then(() => {
        console.log('Message sent')
        return res.json({
            success: true,
        })
    }).catch((error) => {
        console.log(error.response)
        // console.log(error.response.body.errors[0].message)
    });

    let form = new formDataMessage();
    form.name = name;
    form.lastName = lastName;
    form.email = clientEmail;
    form.message = message;

    form.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            });
        }
        res.json(result);
    })


    // sgMail.send(emailData).then(() => {
    //     console.log('Message sent')
    //     return res.json({
    //         success: true,
    //     })
    // }).catch((error) => {
    //     console.log(error.response.body)
    //     // console.log(error.response.body.errors[0].message)
    // })


}


exports.contactBlogAuthorForm = (req, res) => {
    const {email, name, message, lastName} = req.body


    const emailData = {
        to: process.env.EMAIL_TO,
        from: req.body.email,
        subject: `Contact form - ${process.env.APP_NAME}`,
        text: `Email received from contact form \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
        html: `
            <h4>Email received from contact form: </h4>
            <p>Sender name: ${name}</p>
            <p>Sender last name: ${lastName}</p>
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


exports.listFormData = (req, res) => {
    formDataMessage.find({})
        .select('_id name email message createdAt updatedAt')
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: dbErrorHandler(err)
                });
            }
            res.json(data);
        });
};


exports.removeFormData = (req, res) => {
    const id = req.body.id
    formDataMessage.findOneAndRemove({id}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            });
        }
        res.json({
            message: 'Form data deleted successfully.'
        });
    });
};
