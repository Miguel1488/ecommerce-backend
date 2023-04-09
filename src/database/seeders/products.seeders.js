
const getTime = (timestamp) => {
  const millis = timestamp * 1000;
  const date = new Date(millis);
  return date.toDateString();
};


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Smart tv LG",
          description: "Smartv de 49 pulgas full HD 4k",
          price: 450.40,
          img: "https://http2.mlstatic.com/D_NQ_NP_635703-MLA52222636929_102022-O.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Nevera Indurama",
          description: "Indurama 13 pies cromada ",
          price: 800.25,
          img: "https://jgwhiteline.com/wp-content/uploads/2022/06/395.webp",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Lapt Lenovo 17 pgds",
          description: "Ordenador portátil Lenovo IdeaPad 3 HD+ de 17,3 pulgadas, Intel Core i3-1115G4 de doble núcleo (2 núcleos)",
          price: 400.99,
          img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61bT+9AptlL._AC_SL1200_.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Impresora Epson",
          description: "Eficiencia y calidad, Imprime archivos escanea documentos y haz todas las fotocopias que necesites con esta impresora multifunción Epson siempre lista para facilitar tu rutina de trabajo o estudio.",
          price: 260.40,
          img: "https://m.media-amazon.com/images/I/71nE7ZGdwbL._AC_SL1500_.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Camara Cannon ",
          description: "Cámara de vlogging, cámara digital 4K para YouTube, enfoque automático, zoom digital 16X, cámaras de video de 48MP para fotografía",
          price: 125.50,
          img: "https://tiendafotograficaecuador.com.ec/wp-content/uploads/2020/07/Canon-EOS-T7-con-lente-18-55mm-1.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};