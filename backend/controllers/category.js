require("dotenv").config()
const slugify = require("slugify");
const Category = require('../models/category')
const Blog = require('../models/blog');
const {dbErrorHandler} = require("../helpers/dbErrosHelper")

exports.create = (req, res) => {
    const {name} = req.body
    let slug = slugify(name).toLowerCase()
    let category = new Category({name, slug})
    category.save((err, category) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.readAll = (req, res) => {
    let slug = req.params.slug
    Category.find(slug).exec((err, category) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json(category)
    })
}

exports.readOne = (req, res) => {
    let slug = req.params.slug.toLowerCase()
    Category.findOne({slug}).exec((err, category) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        // res.json(data)
        Blog.find({categories: category})
            .populate('categories', '_id name slug')
            .populate('tags', '_id name slug')
            .populate('postedBy', '_id name')
            .select('_id title slug excerpt categories postedBy tags createdAt updatedAt')
            .exec((error, data) => {
                if (error) {
                    return res.status(400).json({
                        error: dbErrorHandler(error)
                    })
                }
                res.json({category, blogs: data})
            })
    })
}

exports.deleteOne = (req, res) => {
    let slug = req.params.slug.toLowerCase()
    Category.findOneAndDelete({slug}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json({
            message: "Category.js successfully removed."
        })
    })
}
