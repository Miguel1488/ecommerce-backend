const UserServices = require("../services/user.services");
const transporter = require("../utils/mailer");


const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;

        const result = await UserServices.create(newUser);
        res.status(201).json(result);
        await transporter.sendMail({
            from: "maespinozav@gmail.com",
            to: result.email,
            subject: "Verifica tu  correo electronico",
            html: `<p> ${resul.username} Bienvenido</p>
            <p>Es necesario que verifiques tu correo </p>`,
        })

    } catch (error) {

        next(error);

    }
};


module.exports = {
    createUser,
}