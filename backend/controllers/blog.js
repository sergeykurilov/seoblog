const slugify = require("slugify")
const Blog = require("../models/blog")
const Category = require("../models/category")
const Tag = require("../models/tags")
const formidable = require("formidable")
const stripHtml = require("string-strip-html")
const _ = require("lodash")
const {dbErrorHandler} = require("../helpers/dbErrosHelper")

/////jnjnj
exports.create = (req,res) => {
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
        blog.mtitle = title
        blog.mcategories = categories
        blog.body = body

        blog.tags = tags
        blog.slug = slugify(title).toLowerCase()


        res.json({ fields, files });
    });
}
