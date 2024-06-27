const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Get all orders 
const getAllOrderItems = () => {
    return prisma.order_item.findMany();
};

//Get order by ID
const getOrderItemById = (order_item_id) =>{
    console.log("inside of the id member function on the model")
    return prisma.order_item.findUnique({
        where: {order_item_id: parseInt(order_item_id) } 
    });
};

//Create a new order 
const createOrderItem = (data) => {
    // const {orderId, productId, quantity, price} = data;

    return prisma.order_item.create({
        data: {
            order_id: data.order_id,
            product_id: data.product_id,
            quantity: data.quantity,
            price: data.price
        }

        // data: {
        //     order: {connect: {order_id: orderId}},
        //     product: {connect: {id: productId}},
        //     quantity,
        //     price
        // }
    });
};
// console.log("create order item:", orderItem);

module.exports = { 
    getAllOrderItems, 
    getOrderItemById,
    createOrderItem
};