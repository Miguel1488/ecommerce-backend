const express = require("express");
const morgan = require("morgan");
require('dotenv').config();
const db = require("./utils/database");
const cors = require("cors");
const initModels = require("./models/initModel");
const userRouter = require("./routes/user.routes");
const erroHandlerRouter = require("./routes/errorhandlers.routes");
const productRouter = require("./routes/product.routes");
const orderRouter = require("./routes/order.routes");
const cartRouter = require("./routes/cart.routes");


// const inorderRouter = require("./routes/product_in_order.routes");
// const producRouter = require("./routes/product_in_cart.routes");






const app = express();
initModels();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 8000;

db.authenticate()
    .then(() => {
        console.log("Base de datos conectada");
    })
    .catch((error) => console.log(error));

db.sync({ alter: false }) // alterar los atributos
    .then(() => console.log("Base de datos sync"))
    .catch((error) => console.log(error));

app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);
app.use(cartRouter);

// app.use(producRouter);
// app.use(inorderRouter);
erroHandlerRouter(app);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


