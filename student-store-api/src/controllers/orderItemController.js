const orderItemModel = require("../models/orderItem");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Example usage in a controller function
const createOrderItem = async (req, res) => {
    const {orderId, productId, quantity, price} = req.body;

    //Validate request body 
    if (!orderId || !productId || !quantity || !price) {
        return res.status(400).json({ error: "Missing requires fields" });
    }

    try {
        // const newOrderItem = await orderItemModel.createOrderItem(req.body);
        const newOrderItem = await prisma.order_item.create({
            data: {
                quantity,
                price,
                order: {connect: {order_id: orderId}},
                product: {connect: {id: productId}}
            }
        });
        res.status(201).json(newOrderItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    createOrderItem
}