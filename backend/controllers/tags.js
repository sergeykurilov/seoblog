require("dotenv").config()
const slugify = require("slugify");
const Tags = require('../models/tags')
const {dbErrorHandler} = require("../helpers/dbErrosHelper")

exports.create = (req, res) => {
    const {name} = req.body
    let slug = slugify(name).toLowerCase()
    let tags = new Tags({name, slug})
    tags.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.readAll = (req,res) => {
    let tag = req.params.tag
    Tags.find({tag}).exec((err, data) => {
        if(err){
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.readOne = (req,res) => {
    let tag = req.params.tag
    Tags.findOne({tag}).exec((err,data) => {
        if(err){
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.deleteOne = (req,res) => {
    let tag = req.params.tag
    Tags.findOneAndDelete({tag}).exec((err,data) => {
        if(err){
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json({
            message: "Tag successfully removed."
        })
    })
}