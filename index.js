const express = require('express') // Importamos express desde node_modules
const server = express() // Lo invocamos y lo guardamos en una variable
const port = 3000

// middleware para aceptar jsons
// 1. instalar con npm install body-parser
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb"}));
server.use(bodyParser.json({limit: "50mb" }));

let marketProducts = [
  {
    id: 1,
    name: "Lamborgini",
    color: "red",
    price: 250,
    stock: 22
  },
  {
    id: 2,
    name: "Bugatti Chiron",
    color: "black",
    price: 400,
    stock: 18
  },
  {
    id: 3,
    name: "Jeep",
    color: "black",
    price: 180,
    stock: 40
  },
]

server.get('/product', (req, res) => {
  // 1. Filtrar por query los colores
  // 2. Filtrar por query los precio
  // 3. Filtrar por query los stock

  try {
    if (color) {
      let productFound = marketProducts.filter((car) => car.color === color)
      //console.log(productFound);
      res.status(220).json(productFound)
    } else if (maxPrice) {
      let productFound = marketProducts.filter((car) => car.price <= maxPrice)
      //console.log(productFound);
      res.status(220).json(productFound)
    } else if (stock){
      let productFound = marketProducts.filter((car) => car.stock >= stock)
      //console.log(productFound);
      res.status(220).json(productFound)
    } else {
      //console.log(marketProducts);
      res.status(220).json(marketProductsssss)
    }
  } catch (error) {
    res.status(400).json("Error en el try de /products")
  }

  let color = req.query.color;
  let maxPrice = req.query.maxPrice;
  let stock = req.query.stock;
  //res.send(marketProducts);
});

// PARAMS Peticion de req.param
server.get('/product/:id', (req, res) => {
  // 1. Filtar segun param de name

  try {
    let id = Number (req.params.id); // => Number (req.params.producto)
  
    let productFound = marketProducts.find((car) => car.id === id)
    
    res.status(220).json(productFound)
  } catch (error) {
    res.status(400).json("Error en la busqueda")
  }
  //res.send("Coca-cola Light!!");
});

// CREAR UN PRODUCTO CON DATOS POR BODY
server.post('/product', (req, res) => {

  try {
    let newProduct = req.body;
  
    console.log(newProduct);
    res.send("Hello POST!!");
  } catch (error) {
    res.status(440).send("Error en la ruta POST")
  }
});

server.patch('/product', (req, res) => {
  console.log("Entrada a la ruta PATCH");
  res.send("Hello PATCH!!");
});

server.delete('/product', (req, res) => {
  console.log("Entrada a la ruta DELETE");
  res.send("Hello DELETE!!");
});

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
})