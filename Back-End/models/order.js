const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    userId: {
        type: String
    },
    account: {
        email: String,
        userName: String
    },
    products: {
        type: [{
            productId: {
                type: String,
                required: true
            },
            productName: {
                type: String,
                required: true
            },
            productPrice: {
                type: String,
                required: true
            },
            selectedSize: {
                type: String,
                required: true
            },
            selectedAmount: {
                type: Number,
                required: true
            }
        }],
        required: true
    }
});

OrderSchema.virtual('id').get(() => {
    return this._id.toHexString();
});

OrderSchema.set('toJSON', {
    virtuals: true
});

const order = module.exports = mongoose.model('Order', OrderSchema);
