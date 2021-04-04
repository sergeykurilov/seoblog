const express = require("express")
const {adminMiddleWare} = require("../middlewares/user");
const {requireSignin} = require("../controllers/auth");
const {create} = require("../controllers/blog");
const router = express.Router()

router.post('/blog',requireSignin, adminMiddleWare, create)

module.exports = router