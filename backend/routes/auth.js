const express = require("express")
const {auth} = require("../controllers/auth");
const router = express.Router()

//validators
const {runValidation} = require("../validators")
const {userSignupValidator} = require("../validators/auth")

router.post('/signup', userSignupValidator, runValidation ,auth)

module.exports = router