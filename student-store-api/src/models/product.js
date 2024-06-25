const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


//Get all products 
    const getAllProducts = (filter = {}, orderBy = {}) => {
        return prisma.product.findMany({
            where: filter, 
            orderBy: orderBy,
        });
    };

    //Get product by ID
    const getProductById = (id) =>{
        console.log("inside of the id member function on the model")
        return prisma.product.findUnique({
            where: {id: parseInt(id) } 
        });
    };

    //Create a new order 
    const createProduct = (prodData) => {
        return prisma.product.create({data: prodData});
    };

    //Update a product
    const updateProduct = async (id, prodData) => {
        return prisma.product.update({
            where: {id: parseInt(id)},
            data: prodData
        });
    };

    //Delete a product
    const deleteProduct = async (id) => {
        return prisma.product.delete({where: {id: parseInt(id)}});
    };



module.exports = { 
    getAllProducts, 
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};