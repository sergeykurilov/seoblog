require("dotenv").config()
const slugify = require("slugify");
const Category = require('../models/category')
const {dbErrorHandler} = require("../helpers/dbErrosHelper")

exports.create = (req, res) => {
    const {name} = req.body
    let slug = slugify(name).toLowerCase()
    let category = new Category({name, slug})
    category.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.readAll = (req,res) => {
    let slug = req.params.slug
    Category.find(slug).exec((err, data) => {
        if(err){
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.readOne = (req,res) => {
    let slug = req.params.slug.toLowerCase()
    Category.findOne({slug}).exec((err,data) => {
        if(err){
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json(data)
    })
}
///asdasdasd
exports.deleteOne = (req,res) => {
    let slug = req.params.slug.toLowerCase()
    Category.findOneAndDelete({slug}).exec((err,data) => {
        if(err){
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json({
            message: "Category.js successfully removed."
        })
    })
}