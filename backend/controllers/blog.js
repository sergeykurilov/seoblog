const Blog = require('../models/blog');
const Category = require('../models/category');
const Tag = require('../models/tags');
const formidable = require('formidable');
const slugify = require('slugify');
const stripHtml = require("string-strip-html");
const _ = require('lodash');
const {dbErrorHandler} = require('../helpers/dbErrosHelper');
const fs = require('fs');

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

        let arrayOfCategories = categories.split(",")
        let arrayOfTags = tags.split(",")


        let blog = new Blog();
        blog.title = title
        blog.body = body
        blog.slug = slugify(title).toLowerCase()
        blog.category = categories
        blog.tag = tags
        blog.mtitle = `${title} | ${process.env.APP_NAME}`
        blog.mdesc = stripHtml(body.substring(0, 160))
        blog.postedBy = req.user._id
        //asdsad
        if (files.photo) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: 'Image should be less then 1mb in size'
                });
            }
            blog.photo.data = fs.readFileSync(files.photo.path);
            blog.photo.contentType = files.photo.type;
        }
///kknjsdnsknk
        blog.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: dbErrorHandler(err)
                });
            }
            Blog.findByIdAndUpdate(result._id, {$push: {categories: arrayOfCategories}}, {new: true}).exec((err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: "213"
                    });
                } else {
                    Blog.findByIdAndUpdate(result._id, {$push: {tags: arrayOfTags}}, {new: true}).exec((err, result) => {
                        if (err) {
                            return res.status(400).json({
                                error: "3393"
                            })
                        }else {
                            res.json(result);
                        }
                    });
                }
            })
        })
    })
}