const OrderServices = require("../services/order.services");


const createOrder = async (req, res, next) => {
    try {
        const newUser = req.body;

        const result = await OrderServices.create(newUser);
        res.status(201).json(result);

    } catch (error) {

        next(error);

    }
};


module.exports = {
    createOrder,
}