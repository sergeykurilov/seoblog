const mongoose = require("mongoose")

const formDataMessage = new mongoose.Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        lowercase: true,
    },
    message: {
        type: String,
    },
}, {timestamps: true})


module.exports = mongoose.model("formDataMessage", formDataMessage);
