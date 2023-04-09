const { Router } = require("express");
const { createUser } = require("../controllers/user.controllers");
const { createUserValidator } = require("../validators/user.validators");



const userRouter = Router();


userRouter.post("/api/v1/users", createUserValidator, createUser)
userRouter.put("/api/v1/users/:id",createUser)

// router.delete("api/v1/users")





module.exports = userRouter;