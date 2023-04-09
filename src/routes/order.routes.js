const { Router } = require("express");
const { createOrder } = require("../controllers/order.controllers");



const orderRouter = Router();

orderRouter.post("/api/v1/order", createOrder)
orderRouter.get("/api/v1/order",createOrder)


module.exports = orderRouter;