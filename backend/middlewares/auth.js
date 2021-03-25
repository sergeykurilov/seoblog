const path = require("path");
require("dotenv").config()
const User = require("../models/user")
const jwt = require("jsonwebtoken")
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


