const express = require('express');
const {list, read, remove, create} = require("../controllers/tags");
const {requireSignin} = require("../controllers/auth");
const {adminMiddleWare} = require("../middlewares/user")
const router = express.Router();

// controllers

// validators
const { runValidation } = require('../validators');
const { createTagValidator } = require('../validators/tags');

// only difference is methods not name 'get' | 'post' | 'delete'
router.post('/tag', createTagValidator, runValidation, requireSignin, adminMiddleWare, create);
router.get('/tags', list);
router.get('/tag/:slug', read);
router.delete('/tag/:slug', requireSignin, adminMiddleWare, remove);

module.exports = router;