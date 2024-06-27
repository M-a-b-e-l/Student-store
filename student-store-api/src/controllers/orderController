const orderModel = require("../models/order");

// Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

//Get order by id
const getOrderById = async (req, res) => {
    try {
        const order = await orderModel.getOrderById(req.params.order_id);
        console.log(order)
        if(order) {
            console.log(order)
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: "Order not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Create new order
const createOrder = async (req, res) => {
    try {
        const newOrder = await orderModel.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
}

//Update order
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await orderModel.updateOrder(req.params.id, req.body);

        if(updatedOrder) {
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ error: "Order not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
} 

//Delete Order
const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await orderModel.deleteOrder(req.params.order_id);

        if(deletedOrder) {
            res.status(200).json(deletedOrder);
        } else {
            res.status(404).json({ error: "Order not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


//get order and its order items
const addItemToOrder = async (req, res) => {
    try {
        const newOrderItem = await orderModel.addItemToOrder(req.params.order_id, req.body);
        res.status(200).json(newOrderItem);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


// Calculate order total
const calculateOrderTotal = async (req, res) => {
    try {
        const total = await orderModel.calculateOrderTotal(req.params.order_id);
        res.status(200).json(total);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//Export the functions created above 
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    addItemToOrder,
    calculateOrderTotal
}
