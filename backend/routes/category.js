const express = require("express")
const {requireSignin} = require("../controllers/auth");
const {create, readAll, readOne, deleteOne} = require("../controllers/category");
const router = express.Router()
const {adminMiddleWare} = require("../middlewares/user");

//validators
const {runValidation} = require("../validators")
const {createCategoryValidator} = require("../validators/category")

router.post('/category', createCategoryValidator, runValidation, requireSignin, adminMiddleWare, create)
//get all categories
router.get("/categories", readAll)
//get one category
router.get("/category/:slug", readOne)
//delete category
router.delete("/category:slug", requireSignin, adminMiddleWare, deleteOne);

module.exports = router