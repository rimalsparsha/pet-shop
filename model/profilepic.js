const mongoose = require('mongoose');

const profile_pic_schema = new mongoose.Schema({


    image:{
        type: String,
        require: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true 
    }
}, {timestamps: true});

const profile_pic_Model = mongoose.model("profle_picture",profile_pic_schema);

module.exports = profile_pic_Model;