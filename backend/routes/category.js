const express = require("express")
const {requireSignin} = require("../controllers/auth");
const {create} = require("../controllers/category");
const router = express.Router()
const {adminMiddleWare} = require("../middlewares/user");

//validators
const {runValidation} = require("../validators")
const {createCategoryValidator} = require("../validators/category")

router.post('/category', createCategoryValidator, runValidation, requireSignin ,adminMiddleWare ,create)


module.exports = router