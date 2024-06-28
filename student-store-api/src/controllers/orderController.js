const orderModel = require("../models/order");
const orderItemModel = require("../models/orderItem");
const productModel = require("../models/product");

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
        let totalPrice = 0;
        const order = req.body;

        const newOrder = await orderModel.createOrder({
            ...order,
            total_price: totalPrice,
        });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
}

//Update order
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await orderModel.updateOrder(req.params.id, req.body);
        console.log(updatedOrder);
        
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
        // get order id from param
        const orderId = parseInt(req.params.order_id);
        const {items} = req.body;


        // call to get order by id
        const createOrderItems = [];

        for(const item of items) {
            console.log(item)
            let productInfo = await productModel.getProductById(item.product_id);
            let itemPrice = productInfo.price;
            console.log(itemPrice);

            const createOrderItem = await orderItemModel.createOrderItem({
                ...item,
                order_id: orderId,
                price: itemPrice,
            });
            createOrderItems.push(createOrderItem);
        }

        orderModel.calculateOrderTotal(orderId);

        console.log("req is", req.body)
        res.status(200).json(createOrderItems);
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
