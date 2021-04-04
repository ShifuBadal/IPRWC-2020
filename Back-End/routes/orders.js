const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');
const isAuth = require('../middlewares/isAuth');

// Fetch all orders
router.get('/', isAuth.isAuth, orderController.fetchOrders);

// Fetch order by UID
router.get('/user', isAuth.isAuth, orderController.getOrdersById);

// Create an order
router.post('/create', isAuth.isAuth, orderController.createOrder);

// Delete an order
router.delete('/delete', isAuth.isAuth, orderController.deleteOrder);

// Update an order
router.put('/update', isAuth.isAuth, orderController.updateOrderByUserId);

module.exports = router;
