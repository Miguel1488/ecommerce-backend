const Cart = require("../models/cart.models");


class CartServices {
    static async create(newUser){
        try {
            const userCreated = await Cart.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
            
        }

    }


module.exports = CartServices;