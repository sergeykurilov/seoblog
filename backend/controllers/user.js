require("dotenv").config()
const Blog = require('../models/blog')
const User = require('../models/user')
const formidable = require('formidable');
const {dbErrorHandler} = require("../helpers/dbErrosHelper");
const _ = require('lodash');
const fs = require('fs');


exports.read = (req, res) => {
    req.profile.hashed_password = undefined
    return res.json(req.profile)
}


exports.publicProfile = (req, res) => {
    let username = req.params.username;
    let user;
    let blogs;

    User.findOne({username}).exec((err, userFromDB) => {
        if (err || !userFromDB) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user = userFromDB;
        let userId = user._id;
        Blog.find({postedBy: userId})
            .populate('categories', '_id name slug')
            .populate('tags', '_id name slug')
            .populate('postedBy', '_id name')
            .limit(10)
            .select('_id title slug excerpt categories tags postedBy createdAt updatedAt')
            .exec((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: dbErrorHandler(err)
                    });
                }
                user.photo = undefined;
                user.hashed_password = undefined;
                res.json({
                    user,
                    blogs: data
                });
            });
    });
};


exports.update = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true;
    form.parse(req, (error, fields, files) => {
        if (error || undefined) {
            return res.status(400).json({
                error: 'Image could not upload'
            })
        }
        let user = req.profile
        user = _.extend(user, fields)

        if(fields.password && fields.password.length < 6){
            return res.status(400).json({
                error: 'Password should be more that 6 characters'
            })
        }

        if (files.photo || undefined) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: 'Image should not be less than 1mb'
                })
            }
            user.photo.data = fs.readFileSync(files.photo.path);
            user.photo.contentType = files.photo.type;
        }
        user.save((err, result) => {
            if (err || !user || undefined) {
                return res.status(400).json({
                    error: dbErrorHandler(err)
                });
            }
            user.hashed_password = undefined
            res.json(user)
        });
    })
}


exports.photo = (req, res) => {
    const username = req.params.username
    User.findOne({username})
        .select('photo')
        .exec((err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: dbErrorHandler(err)
                });
            }
            if (user.photo.data) {
                res.set('Content-Type', user.photo.contentType);
                return res.send(user.photo.data);
            }
        });
}
