const { Router } = require("express");
const { createProduc } = require("../controllers/product_in_cart.controllers");




const producRouter = Router();


producRouter.post("/api/v1/users", createProduc)
producRouter.get("/api/v1/users",createProduc)





module.exports = producRouter