const mongoose = require("mongoose")
const crypto = require("crypto")
const {ObjectId} = require("mongoose")

const blogSchema = new mongoose.Schema({
        title: {
            type: String,
            trim: true,
            required: true,
            min: 3,
            max: 160,
            unique: true,
        },
        slug: {
            type: String,
            unique: true,
            index: true,
        },
        body: {
            type: {},
            required: true,
            min: 20,
            max: 2000000,
        },
        mdesc: {
            type: String,
        },
        mtitle: {
            type: String,
        },
        exerpt: {
            type: String,
            max: 1000,
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        categories: [{type: ObjectId, ref: "Category", required: true}],
        tag: [{type: ObjectId, ref: "Tag", required: true}],
        postedBy: {
            type: ObjectId,
            ref: "User"
        }
    }, {timestamps: true})




module.exports = mongoose.model("Blog", blogSchema)