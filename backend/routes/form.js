const express = require("express")
const {adminMiddleWare} = require("../middlewares/user");
const {requireSignin} = require("../controllers/auth");
const {listFormData, removeFormData} = require("../controllers/form");
const {contactForm, contactBlogAuthorForm} = require("../controllers/form");
const router = express.Router()

//validators
const {runValidation} = require("../validators")
const {contactformValidator} = require("../validators/form")

router.post('/contact', contactformValidator, runValidation, contactForm)
router.get('/get-form-data', listFormData)
router.delete('/remove-form-data', removeFormData);
router.post('/contact-blog-author', contactformValidator, runValidation, contactBlogAuthorForm)

module.exports = router
