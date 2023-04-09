const { Router } = require("express");
const { createCart } = require("../controllers/cart.controllers");


const cartRouter = Router();


cartRouter.post("/api/v1/products", createCart)
cartRouter.get("/api/v1/products",createCart)





module.exports = cartRouter;