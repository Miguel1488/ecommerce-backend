const CartServices = require("../services/cart.services");


const createCart = async (req, res, next) => {
    try {
        const newUser = req.body;

        const result = await CartServices.create(newUser);
        res.status(201).json(result);

    } catch (error) {

        next(error);

    }
};


module.exports = {
    createCart,
}