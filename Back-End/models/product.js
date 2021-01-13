const mongoose = require('mongoose');

// Product schema

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    sizes: [{
        type: Number,
        required: true
    }]
});

const Product = module.exports = mongoose.model("Product", ProductSchema);

