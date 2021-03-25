const express = require("express")
const {adminMiddleWare} = require("../middlewares/user");
const {requireSignin} = require("../controllers/auth");
const {authMiddleWare} = require("../middlewares/user");
const {read} = require("../controllers/user")

const router = express.Router()

router.get('/profile', requireSignin, authMiddleWare, read)

module.exports = router