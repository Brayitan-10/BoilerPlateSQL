const express = require("express"); 
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index.routes");
const server = express(); 

/* ----------------------------MIDDLEWARES------------------------*/
/* ------------ Midedleware para haceptar jsons-------------------*/
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
/* -------------------------------CORS---------------------------*/
server.use(cors());
/* ------------------------------RUTAS---------------------------*/
server.use("/", routes); // localhost/

module.exports = server;
