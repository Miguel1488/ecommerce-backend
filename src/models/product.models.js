const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Product = db.define("products", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,

    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false,

    },

    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id",
    },
    productimg:{
        type: DataTypes.STRING,
        allowNull: false,

    },

});

module.exports = Product;