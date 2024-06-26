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
// const createOrderItem = (prodData) => {
//     return prisma.order_item.create({
//         prodData:  {
//             quantity,
//             price, 
//             order: {connect: {orderId: order_id}},
//             product: {connect: {id: productId}}
//         }
//     });

// };
// console.log("create order item:", orderItem);

module.exports = { 
    getAllOrderItems, 
    getOrderItemById,
    // createOrderItem
};