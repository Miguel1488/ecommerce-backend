const User = require("../models/product_in_order.models");


class Product_in_orderServices {
    static async create(newUser){
        try {
            const userCreated = await User.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
            
        }

    }


module.exports = Product_in_orderServices;