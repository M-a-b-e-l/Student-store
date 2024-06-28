const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController.js");

//Get all the products 
router.get("/", orderController.getAllOrders);

//Get product by ID
router.get("/:order_id", orderController.getOrderById);

//Add a new product
router.post("/", orderController.createOrder);

//Update a product
router.put("/:id", orderController.updateOrder);

//Delete a product
router.delete("/:order_id", orderController.deleteOrder);

router.post("/:order_id/items", orderController.addItemToOrder);

router.get("/:order_id/total", orderController.calculateOrderTotal);

module.exports = router;