const mongoose = require('mongoose');

const sign_in_up_Schema = new mongoose.Schema({

    name:{
        type: String,
        require: true,
        trim: true,
    },
    email:{
        type: String,
        require: true,
        trim: false,
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
        trim: true
    },
    is_admin:{
        type: Number,
        require: true
    },
}, {timestamps: true});

const sign_in_up_Model = mongoose.model("user_sign",sign_in_up_Schema);

module.exports = sign_in_up_Model;