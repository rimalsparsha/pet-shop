const mongoose = require('mongoose');

const shop_schema = new mongoose.Schema({

    petname:{
        type: String,
        require: true,
        trim: true,
    },
    price:{
        type: Number,
        require: true,
    },
    image:{
        type: String,
        require: true,
    }
}, {timestamps: true});

const shop_Model = mongoose.model("shop", shop_schema);

module.exports = shop_Model;