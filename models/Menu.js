const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum:['sweet','spicy','sour'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingeredients:{
        type: [String],
        default:[]
    },
    num_sale:{
        type: Number,
        default: 0
    },
    username :{
        required: true,
        type: String
    },
    password :{
        required: true,
        type: String
    }

})

const MenuItem = mongoose.model('MenuItem', menuSchema);
module.exports = MenuItem;