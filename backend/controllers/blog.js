const fs = require("fs");
const slugify = require("slugify")
const Blog = require("../models/blog")
const Category = require("../models/category")
const Tag = require("../models/tags")
const formidable = require("formidable")
const {stripHtml} = require("string-strip-html");
const _ = require("lodash")
const {dbErrorHandler} = require("../helpers/dbErrosHelper")


exports.create = (req, res) => {
    const form = formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image cannot be uploaded"
            });
        }

        const {title, body, categories, tags} = fields
        let blog = new Blog()
        blog.title = title
        blog.body = body
        blog.tags = tags
        blog.slug = slugify(title).toLowerCase();
        blog.postedBy = req.user._id
        blog.mtitle = `${title} | ${process.env.APP_NAME}`
        blog.mdesc = stripHtml(body.substr(0, 160))


        if (files.photo) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: "Image cannot be less than 1mb"
                });
            }
            blog.photo.data = fs.readFileSync(files.photo.path)
            blog.photo.contentType = files.photo.type
        }


        blog.save((err, result) => {
            if(err){
                return res.status(400).json({
                    error: dbErrorHandler(err)
                });
            }
            res.json(result);
        })

    });
}
