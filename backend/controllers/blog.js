const Blog = require('../models/blog');
const Category = require('../models/category');
const Tag = require('../models/tags');
const formidable = require('formidable');
const slugify = require('slugify');
const stripHtml = require("string-strip-html");
const _ = require('lodash');
const {dbErrorHandler} = require('../helpers/dbErrosHelper');
const fs = require('fs');
const {smartTrim} = require("../helpers/blog")


exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not upload'
            });
        }

        const {title, body, categories, tags} = fields;

        if (!body || body.length < 200) {
            return res.status(400).json({
                error: 'Body should be at least 200 symbols'
            });
        }

        if (!title || title.length === 0) {
            return res.status(400).json({
                error: 'Title is required'
            });
        }

        if (!tags || tags.length === 0) {
            return res.status(400).json({
                error: 'Tags is required'
            });
        }

        let arrayOfCategories = categories && categories.split(",")
        let arrayOfTags = tags && tags.split(",")


        let blog = new Blog();
        blog.title = title
        blog.body = body
        blog.slug = slugify(title).toLowerCase()
        blog.category = categories
        blog.tag = tags
        blog.excerpt = smartTrim(body, 100, " ", "...")
        blog.mtitle = `${title} | ${process.env.APP_NAME}`
        blog.mdesc = stripHtml(body.substring(0, 160))
        blog.postedBy = req.user._id

        if (files.photo) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: 'Image should be less then 1mb in size'
                });
            }
            blog.photo.data = fs.readFileSync(files.photo.path);
            blog.photo.contentType = files.photo.type;
        }
        blog.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: dbErrorHandler(err)
                });
            }
            // res.json(result);
            Blog.findByIdAndUpdate(result._id, {$push: {categories: arrayOfCategories}}, {new: true}).exec(
                (err, result) => {
                    if (err) {
                        return res.status(400).json({
                            error: dbErrorHandler(err)
                        });
                    } else {
                        Blog.findByIdAndUpdate(result._id, {$push: {tags: arrayOfTags}}, {new: true}).exec(
                            (err, result) => {
                                if (err) {
                                    return res.status(400).json({
                                        error: dbErrorHandler(err)
                                    });
                                } else {
                                    res.json(result);
                                }
                            }
                        );
                    }
                }
            );
        });
    });
};

//list,listAllBlogsCategoriesTags,read,remove,update

exports.list = (req, res) => {
    Blog.find({})
        .populate('Category', '_id name slug')
        .populate('Tag', '_id name slug')
        .populate('postedBy', '_id name username')
        .select('_id title slug excerpt categories tags postedBy createdAt updatedAt')
        .exec((err, data) => {
            console.log(err)
            if (err) {
                return res.json({
                    error: dbErrorHandler(err)
                });
            }
            res.json(data);
        });
};

exports.listAllBlogsCategoriesTags = (req, res) => {
    let limit = req.body.limit ? parseInt(req.body.limit) : 10;
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;

    let blogs;
    let categories;
    let tags;

    Blog.find({})
        .populate('categories', '_id name slug')
        .populate('tags', '_id name slug')
        .populate('postedBy', '_id name username profile')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select('_id title slug excerpt categories tags postedBy createdAt updatedAt')
        .exec((err, data) => {
            if (err) {
                return res.json({
                    error: dbErrorHandler(err)
                });
            }
            blogs = data; // blogs
            // get all categories
            Category.find({}).exec((err, c) => {
                if (err) {
                    return res.json({
                        error: dbErrorHandler(err)
                    });
                }
                categories = c; // categories
                // get all tags
                Tag.find({}).exec((err, t) => {
                    if (err) {
                        return res.json({
                            error: dbErrorHandler(err)
                        });
                    }
                    tags = t;
                    // return all blogs categories tags
                    res.json({ blogs, categories, tags, size: blogs.length });
                });
            });
        });
};
///sss
exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Blog.findOne({ slug })
        // .select("-photo")
        .populate('categories', '_id name slug')
        .populate('tags', '_id name slug')
        .populate('postedBy', '_id name username')
        .select('_id title body slug mtitle mdesc categories tags postedBy createdAt updatedAt')
        .exec((err, data) => {
            if (err) {
                return res.json({
                    error: dbErrorHandler(err)
                });
            }
            res.json(data);
        });
};

exports.remove = (req, res) => {
    const slug = req.params.slug.toLowerCase()

    Blog.findOneAndRemove({slug}).exec((err, data) => {
        if (err) {
            return res.json({
                error: dbErrorHandler(err)
            });
        }
        res.json({
            message: `Blog deleted successfully`
        })
    })
}

exports.update = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Blog.findOne({slug}).exec((err, oldBlog) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            });
        }

        let form = new formidable.IncomingForm();
        form.keepExtensions = true;

        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.status(400).json({
                    error: 'Image could not upload'
                });
            }

            let slugBeforeMerge = oldBlog.slug;
            oldBlog = _.merge(oldBlog, fields);
            oldBlog.slug = slugBeforeMerge;

            const {body, desc, categories, tags} = fields;

            if (body) {
                oldBlog.excerpt = smartTrim(body, 320, ' ', ' ...');
                oldBlog.mdesc = stripHtml(body.substring(0, 160));
            }

            if (categories) {
                oldBlog.categories = categories.split(',');
            }

            if (tags) {
                oldBlog.tags = tags.split(',');
            }

            if (files.photo) {
                if (files.photo.size > 10000000) {
                    return res.status(400).json({
                        error: 'Image should be less then 1mb in size'
                    });
                }
                oldBlog.photo.data = fs.readFileSync(files.photo.path);
                oldBlog.photo.contentType = files.photo.type;
            }

            oldBlog.save((err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: dbErrorHandler(err)
                    });
                }
                res.json(result);
            });
        });
    });
};


exports.photo = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Blog.findOne({ slug })
        .select('photo')
        .exec((err, blog) => {
            if (err || !blog) {
                return res.status(400).json({
                    error: dbErrorHandler(err)
                });
            }
            res.set('Content-Type', blog.photo.contentType);
            return res.send(blog.photo.data);
        });
};