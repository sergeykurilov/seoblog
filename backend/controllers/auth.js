require("dotenv").config()
const sgMail = require('@sendgrid/mail')
const User = require("../models/user")
const shortid = require("shortid")
const jwt = require("jsonwebtoken")
const expressJwt = require("express-jwt")
const _ = require('lodash')
const {OAuth2Client} = require('google-auth-library')

const {dbErrorHandler} = require("../helpers/dbErrosHelper");
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kurilovsergey15@gmail.com',
        pass: 'q92e01kl'
    }
});

exports.forgot = (req, res) => {
    const {email} = req.body;
    console.log(email)
    User.findOne({email}, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                error: 'User with that email does not exist'
            });
        }

        const token = jwt.sign({_id: user._id}, process.env.JWT_RESET_PASSWORD, {expiresIn: '10m'});

        // email
        const emailData = {
            from: process.env.EMAIL_TO,
            to: email,
            subject: `Password reset link`,
            html: `
            <p>Please use the following link to reset your password:</p>
            <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
            <hr />
            <p>This email may contain sensetive information</p>
            <p>https://seoblog.com</p>
        `
        };

        return user.updateOne({resetPasswordLink: token}, (err, success) => {
            if (err) {
                return res.json({error: dbErrorHandler(err)});
            } else {
                transporter.sendMail(emailData).then(() => {
                    console.log('Message sent')
                    return res.json({
                        message: `Email has been sent to ${email}. Follow the instructions to reset your password. Link expires in 10min.`
                    })
                }).catch((error) => {
                    console.log(error.response.body)
                    // console.log(error.response.body.errors[0].message)
                });
                // sgMail.send(emailData).then(sent => {
                //     return res.json({
                //         message: `Email has been sent to ${email}. Follow the instructions to reset your password. Link expires in 10min.`
                //     });
                // }).catch((error) => {
                //     console.log(error.response.body)
                //     // console.log(error.response.body.errors[0].message)
                // });
            }
        });
    })
}

exports.preSignup = (req, res) => {
    const {name, email, password} = req.body;

    User.findOne({email: email.toLowerCase()}, (err, user) => {
        if (user) {
            return res.status(401).json({
                error: 'Email taken.'
            });
        }
        const token = jwt.sign({name, email, password}, process.env.ACCOUNT_ACTIVATION, {expiresIn: "10m"})

        const emailData = {
            from: process.env.EMAIL_TO,
            to: email,
            subject: `Account activation`,
            html: `
            <p>Please use the following link to activate your account:</p>
            <p>${process.env.CLIENT_URL}/auth/account/activation/${token}</p>
            <hr />
            <p>This email may contain sensetive information</p>
            <p>https://seoblog.com</p>
        `
        };
        transporter.sendMail(emailData).then(() => {
            console.log('Message sent')
            return res.json({
                message: `Email has been sent to ${email}  /n Follow the instructions to reset your password. Link expires in 10 min.`
            })
        }).catch((error) => {
            console.log(error.response.body)
            // console.log(error.response.body.errors[0].message)
        });

    })
}


exports.reset = (req, res) => {
    const {newPassword, resetPasswordLink} = req.body
    if (resetPasswordLink) {
        jwt.sign(resetPasswordLink, process.env.JWT_RESET_PASSWORD, function (err, decoded) {
            if (err) {
                res.status(401).json({
                    error: "Expired link. Please try again"
                })
            }
            User.findOne({resetPasswordLink}, function (error, user) {
                const updatedValues = {
                    newPassword: newPassword,
                    resetPasswordLink: ""
                }
                user = _.extend(user, updatedValues)
                user.save((error, result) => {
                    if (error || !result) {
                        res.status(400).json({
                            error: dbErrorHandler(error)
                        })
                    }
                    res.json({
                        message: "Great! Now you can login with your new password."
                    })
                })
            })
        })
    }
}


// exports.signup = (req, res) => {
//     User.findOne({email: req.body.email}).exec((err, user) => {
//         if (user) {
//             return res.status(400).json({
//                 error: "Email is taken"
//             })
//         }
//
//         const {name, email, password} = req.body
//         let username = shortid.generate()
//         let profile = `${process.env.CLIENT_URL}/profile/${username}`
//
//         let newUser = new User({name, email, password, profile, username})
//         newUser.save((err, success) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: err
//                 })
//             }
//             // res.json({
//             //     user: success
//             // })
//             res.json({
//                 message: "Signup success! Please sign in"
//             })
//         })
//     })
// }

const client = new OAuth2Client(process.env.OAUTH_CLIENTID)
exports.googleSignin = (req, res) => {
    const idToken = req.body.tokenId
    client.verifyIdToken({idToken, audience: process.env.OAUTH_CLIENTID}).then((response) => {
        const {email_verified, name, email, jti} = response.payload
        if (email_verified) {
            User.findOne({email}).exec((err, user) => {
                if (user) {
                    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"})
                    res.cookie('token', token, {expiresIn: "1d"})
                    const {_id, username, name, email, role} = user
                    return res.json({token, user: {_id, name, email, role, username}})
                }else{
                    let username = shortid.generate()
                    let profile = `${process.env.CLIENT_URL}/profile/${username}`
                    let password = jti
                    user = new User({name, email, password, profile, username})
                    user.save((err, user) => {
                        if(err || !user){
                            return res.status(400).json({
                                error: dbErrorHandler(err)
                            })
                        }
                        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"})
                        res.cookie('token', token, {expiresIn: "1d"})
                        const {_id, username, name, email, role} = user
                        return res.json({token, user: {_id, name, email, role, username}})
                    })
                }
            })
        }else{
                return res.status(400).json({
                    error: "Google login failed. Please try again."
                })
        }
    })
}


exports.signup = (req, res) => {
    const {name, email, password} = req.body;
    if (name || email || password) {
        let username = shortid.generate();
        let profile = `${process.env.CLIENT_URL}/profile/${username}`;

        const user = new User({name, email, password, profile, username});
        user.save((err, user) => {
            if (err) {
                return res.status(401).json({
                    error: dbErrorHandler(err)
                });
            }
            return res.json({
                message: 'Sing up success! Please signin'
            });
        });
    }
};


exports.signin = (req, res) => {
    const {email, password} = req.body;
    // check if user exist
    User.findOne({email}).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please signup.'
            });
        }
        // authenticate
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: 'Email and password do not match.'
            });
        }
        // generate a token and send to
        const token = jwt.sign({_id: user._id, role: user.role}, `${process.env.JWT_SECRET}`, {expiresIn: '1d'});

        res.cookie('token', token, {expiresIn: '1d'});
        const {_id, username, name, email, role} = user;
        return res.json({
            token,
            user: {_id, username, name, email, role}
        });
    });
};


exports.signout = (req, res) => {
    res.clearCookie("token")
    res.json({
        message: "Signout successful"
    })
};

exports.requireSignin = expressJwt({
    secret: `${process.env.JWT_SECRET}`,
    algorithms: ['HS256']
});


