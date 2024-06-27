const express = require("express");
const router = express.Router();
const orderItemController = require("../controllers/orderItemController");

//Get all the products 
router.get("/", orderItemController.getAllOrderItems);

//Get product by ID
router.get("/:id", orderItemController.getOrderItemById);

//Add a new product
router.post("/", orderItemController.createOrderItem);

//Update a product
// router.put("/:id", orderItemController.updateOrderItem);

//Delete a product
// router.delete("/:id", orderItemController.getOrderAndOrderItems);


module.exports = router;