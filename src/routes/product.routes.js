const { Router } = require("express");
const { createProduct } = require("../controllers/product.controllers");




const productRouter = Router();


productRouter.post("/api/v1/product", createProduct)
productRouter.get("/api/v1/product",createProduct)







module.exports = productRouter;