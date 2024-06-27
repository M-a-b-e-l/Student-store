const orderItemModel = require("../models/orderItem");

//Get all orderItems 
const getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await orderItemModel.getAllOrderItems();
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

//Get orderItem by id
const getOrderItemById = async (req, res) => {
    try {
        const orderItem = await orderItemModel.getOrderItemById(req.params.id);
        console.log(orderItem)
        if(orderItem) {
            console.log(orderItem)
            res.status(200).json(orderItem);
        } else {
            res.status(404).json({ error: "Order item not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Get orderItem by ID
const createOrderItem = async (req, res) => {
    // //Validate request body 
    // if (!orderId || !productId || !quantity || !price) {
    //     return res.status(400).json({ error: "Missing required fields" });
    // }

    try {
        // const newOrderItem = await orderItemModel.createOrderItem(req.body);
        const newOrderItem = await orderItemModel.createOrderItem(req.body);
        res.status(201).json(newOrderItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Update orderItem
// const updateOrderItem = async (req, res) => {
//     try {
//         const updatedOrderItem = await orderItemModel.updateOrderItem(req.params.id, req.body);

//         if(updatedOrderItem) {
//             res.status(200).json(updatedOrderItem);
//         } else {
//             res.status(404).json({ error: "Order item not found"});
//         }
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// } 


module.exports = {
    getAllOrderItems,
    getOrderItemById,
    createOrderItem, 
    // updateOrderItem
}