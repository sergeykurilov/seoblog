const express = require("express")
const {adminMiddleWare} = require("../middlewares/user");
const {requireSignin} = require("../controllers/auth");
const {authMiddleWare} = require("../middlewares/user");
const {read,publicProfile} = require("../controllers/user")

const router = express.Router()

router.get('/profile', requireSignin, authMiddleWare, read)
router.get('/user/:username', publicProfile)

module.exports = router
