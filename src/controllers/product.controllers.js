const ProductServices = require("../services/product.services");


const createProduct = async (req, res, next) => {
    try {
        const newUser = req.body;

        const result = await ProductServices.create(newUser);
        res.status(201).json(result);

    } catch (error) {

        next(error);

    }
};


module.exports = {
    createProduct,
}