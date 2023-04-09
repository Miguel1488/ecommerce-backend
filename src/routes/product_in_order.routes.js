
const { Router } = require("express");




const inorderRouter = Router();


inorderRouter.post("/api/v1/product_in_order", createInorder)
inorderRouter.get("/api/v1/product_in_order",createInorder)






module.exports = inorderRouter;