const express = require("express")
const {adminMiddleWare} = require("../middlewares/user");
const {requireSignin} = require("../controllers/auth");
const {create,list,listAllBlogsCategoriesTags,read,remove,update,photo,listRelated,listSearch} = require("../controllers/blog");
const router = express.Router()

router.post('/blog', requireSignin, adminMiddleWare, create);
router.get('/blogs', list);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleWare, remove);
router.put('/blog/:slug', requireSignin, adminMiddleWare, update);
router.get('/blog/photo/:slug', photo);
router.post('/blogs/related', listRelated);
router.get('/blogs/search', listSearch);


module.exports = router