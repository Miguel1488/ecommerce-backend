const User = require("../models/product_in_cart.models");


class Product_in_cartServices {
    static async create(newUser){
        try {
            const userCreated = await User.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
            
        }

    }


module.exports = Product_in_cartServices;