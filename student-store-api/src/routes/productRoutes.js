const express = require("express");
const router = express.Router();
const prodController = require("../controllers/prodController");


//Get all the products 
router.get("/", prodController.getAllProducts);

//Get product by ID
router.get("/:id", prodController.getProductById);

//Add a new product
router.post("/", prodController.createProduct);

//Update a product
router.put("/:id", prodController.updateProduct);

//Delete a product
router.delete("/:id", prodController.deleteProduct);


module.exports = router;