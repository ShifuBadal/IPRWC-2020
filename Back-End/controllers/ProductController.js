const Product = require('../models/product');

exports.fetchProducts = async (req, res, next) => {
    try{
        const items = await Product.find({});
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
}

exports.createProduct = (req, res, next) => {
    let newProduct = new Product({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        imagePath: req.body.imagePath,
        sizes: req.body.sizes,
        colors: req.body.sizes
    });

    this.addProduct(newProduct, (err, product) => {
        if(err) {
            res.json({success: false, msg: err.message});
        } else {
            res.json({success: true, msg: 'Successfully created product'});
        }
    });
}

exports.getProductById = async function(id, callback) {
    await Product.findById(id, callback);
}

exports.addProduct = async function(newProduct, callback) {
    await newProduct.save(callback);
}
