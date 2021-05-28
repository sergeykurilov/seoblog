const path = require("path");
require("dotenv").config()
const Blog = require('../models/blog');
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const {dbErrorHandler} = require("../helpers/dbErrosHelper");
exports.authToken = async (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1];

    if (!token) {
        res.status(401).json({error: "Unauthorized user"})
    }
    const decoded = jwt.verify(token, "123")
    if (!decoded) {
        res.status(401).json({error: "Invalid decoded token"})
    }

    req.user = await User.findOne({_id: decoded._id});
    req.token = token;
    next()
}

exports.canUpdateDeleteBlog = (req, res, next) => {
    const slug = req.params.slug.toLowerCase();
    Blog.findOne({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            });
        }
        let authorizedUser = data.postedBy._id.toString() === req.profile._id.toString();
        if (!authorizedUser) {
            return res.status(400).json({
                error: 'You are not authorized'
            });
        }
        next();
    });
};
