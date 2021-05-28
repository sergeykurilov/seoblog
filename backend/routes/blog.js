const express = require("express")
const {canUpdateDeleteBlog} = require("../middlewares/auth");
const {authMiddleWare} = require("../middlewares/user");
const {adminMiddleWare} = require("../middlewares/user");
const {requireSignin} = require("../controllers/auth");
const {create,list,listAllBlogsCategoriesTags,read,remove,update,photo,listRelated,listSearch,listByUser} = require("../controllers/blog");
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


router.post('/user/blog', requireSignin, authMiddleWare, create);
router.get('/:username/blogs', listByUser);
router.delete('/user/blog/:slug', requireSignin, authMiddleWare, canUpdateDeleteBlog, remove);
router.put('/user/blog/:slug', requireSignin, authMiddleWare, canUpdateDeleteBlog, update);


module.exports = router
