require("dotenv").config()
const Blog = require('../models/blog');
const {dbErrorHandler} = require("../helpers/dbErrosHelper");

exports.read = (req, res) => {
    req.profile.hashed_password = undefined
    return res.json(req.profile)
}


exports.publicProfile = (req, res) => {
    let userName = req.params.username
    let user
    let blogs
    Blog.find({userName}).exec(function (err, userfromDB) {
        if (err) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user = userfromDB
        let userId = user._id
        Blog.find({'postedBy': userId})
            .populate('categories', '_id name slug')
            .populate('tags', '_id name slug')
            .populate('postedBy', '_id name')
            .limit(10)
            .select('_id title slug excerpt categories postedBy tags createdAt updatedAt')
            .exec((error, data) => {
                if (err) {
                    return res.status(400).json({
                        error: dbErrorHandler(err)
                    });
                }
                user.photo = undefined
                res.json({user, blogs: data})
            })
    })

}

