const prodModel = require("../models/product");

// Get all products
const getAllProducts = async (req, res) => {
    const {name, category, sort} = req.query;

    let filter = {}; //filter by name/category
    let orderBy = {}; //sort by price

    if(name) {
        filter.name = name;
    }

    if(category) {
        filter.category = category;
    }

    if(sort) {
        orderBy = {name: sort === "asc" ? "asc" : "desc"};
    }

    try {
        const products = await prodModel.getAllProducts(filter, orderBy);
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

//Get product by id
const getProductById = async (req, res) => {
    console.log("inside getProductById on the controller")
    try {
        const product = await prodModel.getProductById(req.params.id);
        console.log(product)
        if(product) {
            console.log(product)
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: "Product not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Create new product
const createProduct = async (req, res) => {
    try {
        const newProduct = await prodModel.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
}

//Update product
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await prodModel.updateProduct(req.params.id, req.body);

        if(updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: "Product not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
} 

//Delete product
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await prodModel.deleteProduct(req.params.id);

        if(deletedProduct) {
            res.status(200).json(deletedProduct);
        } else {
            res.status(404).json({ error: "Product not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


//Export the functions created above 
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}
