const Order = require('../models/order');

exports.fetchOrders = async (req, res) => {
    try{
        const orders = await Order.find({});
        res.json(orders)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.createOrder = async (req, res) => {
    let order = new Order({
        name: req.body.name,
        userId: req.body.userId,
        account: req.body.account,
        products: req.body.products,
        status: req.body.status
    });

    try {
        const order = await order.save();
        console.log('pRenk')
        res.status(201).json({message: 'Order posted', order: order});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const orderId = {'_id': req.params.id}
        await Order.findOneAndDelete(orderId);
        res.status.json(200).json({message: `Deleted order successfully`});
    } catch (err) {
        res.status.json(200).json({message: err.message});
    }
};

exports.getOrdersById = async (req, res) => {
    let orders;
    try {
        const userId = { '_id' : req.params.userId };
        orders = await Order.find({userId: userId});
        if(orders === null){
            res.status(400).json({message: 'There are no orders'});
        }
        res.json(orders);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateOrderByUserId = async (req, res) => {
    try {
        const order = await Order.findOneAndUpdate({'_id': req.body.order.id}, req.body.order);
        res.status(200).json({message: 'Created order successfully', order: order});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}
