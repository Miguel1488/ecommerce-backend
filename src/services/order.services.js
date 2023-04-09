const Order = require("../models/order.model");


class OrderServices {
    static async create(newUser){
        try {
            const userCreated = await Order.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
            
        }

    }


module.exports = OrderServices;