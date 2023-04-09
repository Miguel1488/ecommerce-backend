const Product = require("../models/product.models");


class ProductServices {
    static async create(newUser){
        try {
            const userCreated = await Product.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
            
        }

    }


module.exports = ProductServices;