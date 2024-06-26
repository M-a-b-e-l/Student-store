const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


//Get all orders 
const getAllOrders = () => {
    return prisma.order.findMany();
};

//Get order by ID
const getOrderById = (order_id) =>{
    console.log("inside of the id member function on the model")
    return prisma.order.findUnique({
        where: {order_id: parseInt(order_id) } 
    });
};

//Create a new order 
const createOrder = (prodData) => {
    return prisma.order.create({data: prodData});
};

//Update an order
const updateOrder = async (order_id, prodData) => {
    return prisma.order.update({
        where: {order_id: parseInt(order_id)},
        data: prodData
    });
};

//Delete an order
const deleteOrder = async (order_id) => {
    return prisma.order.delete({where: {order_id: parseInt(order_id)}});
};

//Get order and its order items 
const getOrderAndOrderItems = async (order_id) => {
    return prisma.order.findUnique({
        where: {order_id: parseInt(order_id)},
        include: {order_items: true}
    });
};

module.exports = { 
    getAllOrders, 
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder, 
    getOrderAndOrderItems
};