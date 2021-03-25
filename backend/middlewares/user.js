require("dotenv").config()
const User = require("../models/user")


exports.authMiddleWare = (req, res, next) => {
    const verifyedUser = req.user._id
    User.findById({_id: verifyedUser}).exec((err, user) => {
        if(err || !user){
            res.status(401).json({
                error: "User not found. Please signup"
            })
        }
        req.profile = user
        next()
    })
}
exports.adminMiddleWare = (req,res,next) => {
    const verifyedUser = req.user._id

    User.findById({_id: verifyedUser}).exec((err, user) => {
        if(err || !user){
            res.status(401).json({
                error: "User not found. Please signup"
            })
        }
        if (user.role !== 1) {
            res.status(401).json({
                error: "Amin resource. Contact with admin."
            })
        }
        req.profile = user
        next()
    })
}
