const express = require("express")
const {signin, signup, signout} = require("../controllers/auth");

const router = express.Router()

//validators
const {runValidation} = require("../validators")
const {userSignupValidator, userSigninValidator} = require("../validators/auth")

router.post('/signup', userSignupValidator, runValidation, signup)
router.post('/signin', userSigninValidator, runValidation, signin)
router.post("/signout", signout)

// router.get("/users", requireSignin ,isAdmin ,(req,res) => {
//     res.json({
//         message: "admin page"
//     })
// })
//test
// router.get("/secret", requireSignin, (req, res) => {
//     res.json({
//         message: "You have access to this page"
//     })
// })


module.exports = router