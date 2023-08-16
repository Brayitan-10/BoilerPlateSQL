const express = require('express') // Importamos express desde node_modules
const server = express() // Lo invocamos y lo guardamos en una variable
const port = 3000


// => EJEMPLO DE RUTA GET AL ENDPOINT / 
/*server.get('/', (req, res) => {
  res.send("Hola perritos, na' mentiras enamorao' pues wevon jsjsjsjs")
})

server.get("/ejemplo", (req, res) => {
    res.send("Estoy en la ruta de ejemplo, ademas, enamorao' de Sarah-Jade Bleau")
})

server.post("/ejemplo", (req, res) => {
  res.send("Estoy en la ruta de ejemplo, ademas, enamorao' de Sarah-Jade Bleau")
})

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
})*/

server.get('/product', (req, res) => {
  // QUERY - peticion req.query
  // Como armar un query => luego del endpoint agregar ?clave=valor&clave=valor
  //let query = req.query
  let order = req.query.order;
  if (order === "asc") {
    console.log("Envio resultados ordenados ascendentes");
  } /*else if (order === "desc") {
    console.log("Envio resultados descendentes");
  } else {
    console.log("Envio resultados desordenados");
  }*/

  //console.log("Esta ruta me traeria todos los productos segun filtro", order);
  //console.log("Que es QUERY?", query);
  res.send("Hello GET!!");
});

// PARAMS Peticion de req.param
server.get('/product/:producto', (req, res) => {
  //let category = req.params.categoria;
  //let product = req.params.producto
  //let params = req.params;
  let producto = req.params.producto; // => Number (req.params.producto)
  // con destructuring
  //let {producto, categoria} = req.params

  //console.log(params);
  //console.log(req.params);
  console.log("Esta ruta me traeria el producto:", producto); // Tambien se puede => Number (producto)
  //console.log("Esta ruta me traeria la categoria:", category);
  res.send("Coca-cola Light!!");
});


server.post('/product', (req, res) => {
  console.log("Entrada a la ruta POST");
  res.send("Hello POST!!");
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