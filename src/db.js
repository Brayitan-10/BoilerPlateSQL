const { Sequelize } = require("sequelize");
const ProductModel = require("./models/product");
const CategoryModel = require("./models/category")
// ⚠ IMPORTO LA FUNCION DEL MODELO PARA SINCRONIZAR Y EVITAR MULTIPLES NEW SEQUELIZE EN CADA AR

// VARIABLES DE ENTORNO
const USER_DB = "postgres";
const PASS_DB = "Sarah-Jade Bleau";
const HOST_DB = "localhost";
const PORT_DB = 5432;
const NAME_DB = "carStore";

// INICIO UNA INSTANCIA DE SEQUELIZE Y CONECTO CON LA BASE DE DATOS
const sequelize = new Sequelize(`postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`, {
  logging: false, // CAMBIAR A TRUE PARA VER LAS QUERY QUE SE EJECUTAN DESDE LA CONSOLA
  native: false, // LETS SEQUELIZE KNOW WE CAN USE PG-NATIVE FOR ~30% MORE SPEED
}
);

// AQUI EJECUTO LA FUNCION IMPORTADA DE CADA MODELO Y PASO SEQUELIZE COMO ARGUMENTO
ProductModel(sequelize);
CategoryModel(sequelize);

// ¿como me doy cuenta si se conectarosn los modelos correctamente?
// Aqui tenemos los modelos guardados luego de sincronizarlos
console.log(sequelize.models);

// Hacemos un destructuring y podemos hacer las relaciones
const { Product, Category } = sequelize.models;
// Relaciones con respecto a las tablas



// EXPORTO SEQUELIZE
module.exports = {sequelize, ...sequelize.models};
