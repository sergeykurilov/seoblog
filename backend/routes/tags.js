const express = require("express")
const {deleteOne} = require("../controllers/tags");
const {readOne} = require("../controllers/tags");
const {readAll} = require("../controllers/tags");
const {create} = require("../controllers/tags");
const {adminMiddleWare} = require("../middlewares/user");
const {requireSignin} = require("../controllers/auth");

const router = express.Router()


//validators
const {runValidation} = require("../validators")
const {createTagValidator} = require("../validators/tags")

router.post('/tags', createTagValidator, runValidation, requireSignin, adminMiddleWare, create)
//get all tags
router.get("/tags", readAll)
//get one tag
router.get("/tags/:tags", readOne)
//delete tag
router.delete("/tags/:tags", requireSignin, adminMiddleWare, deleteOne);

module.exports = router