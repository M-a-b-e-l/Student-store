const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


//Get all orders 
const getAllOrders = () => {
    return prisma.order.findMany();
};

//Get order by ID
const getOrderById = (order_id) =>{
    return prisma.order.findUnique({
        where: {order_id: parseInt(order_id) } ,
        include: {order_items: true}
    });
};

//Create a new order 
const createOrder = (prodData) => {
    try {
        console.log(prodData);
        return prisma.order.create({
            data: {
                customer_id: prodData.customer_id,
                total_price: prodData.total_price,
                status: prodData.status,
            }});
    } catch (error) {
        throw new Error(`Error deleting order: ${error.message}`);
    }
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
    // return prisma.order.delete({where: {order_id: parseInt(order_id)}});

    const orderId = parseInt(order_id);

    try {
        // Fetch order items associated with the order
        const orderItems = await prisma.order_item.findMany({
        where: {
            order_id: orderId,
        },
        });
        // Delete each order item
        await Promise.all(
        orderItems.map(async (item) => {
            await prisma.order_item.delete({
            where: {
                order_item_id: item.order_item_id,
            },
            });
        })
        );
        // Now delete the order itself
        const deletedOrder = await prisma.order.delete({
        where: {
            order_id: orderId,
        },
        });
        return deletedOrder;
    } catch (error) {
        throw new Error(`Error deleting order: ${error.message}`);
    }
};



const addItemToOrder = async (order_id, itemData) => {
    console.log("order_id",order_id)
    console.log("itemData", itemData)
    return prisma.order_item.create({
        data: {
            order_id: parseInt(order_id), 
            product_id: itemData.product_id,
            quantity: itemData.quantity,
            price: itemData.price
        }
        
    });
};

//get order total 
const calculateOrderTotal = async (order_id) => {
    let total_price = 0;

    const order = await prisma.order.findUnique({
        where: { order_id: parseInt(order_id) }, 
        include: {order_items: true}
    });

    if(!order) {
        throw new Error("Order not found");
    }

    for(const item of order.order_items) {
        total_price += item.price * item.quantity;
    }

    total_price = total_price * 1.0875;

    return prisma.order.update({
        where: {order_id: parseInt(order_id)},
        data: {total_price: total_price}
    })

    // const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    // return { total };
};


module.exports = { 
    getAllOrders, 
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder, 
    addItemToOrder,
    calculateOrderTotal
};