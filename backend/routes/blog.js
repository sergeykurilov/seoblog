const express = require("express")
const {create} = require("../controllers/blog");
const router = express.Router()

router.post('/blog', create)

module.exports = router