const { Router } = require("express");
const router = Router(); // localhost:3000/product

// CREAR UN ARRAY CON 10 PRODUCTOS Y AL MENOS 5 CLAVES
let marketProducts = [
    {
        id: 1,
        name: "Lamborghini Revuelto",
        color: "orange metalic",
        price: 322,
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
        name: "Jeep Gladiator Rubicon",
        color: "red",
        price: 222,
        stock: 40 
    }
];

router.get("/", (req, res) => {
    try {
        let color = req.query.color;
        let maxPrice = req.query.price;
        let stock = req.query.stock;

        if (color) {
            let productFound = marketProducts.filter((car) => car.color === color);
            res.status(220).json(productFound);
        } else if (maxPrice) {
            let productFound = marketProducts.filter((car) => car.price <= maxPrice);
            res.status(220).json(productFound);
        } else if (stock) {
            let productFound = marketProducts.filter((car) => car.stock >= stock);
            res.status(220).json(productFound);
        } else {
            res.status(220).json(marketProducts);
        } 
    } catch (error) {
        console.log("ESTE ES EL ERROR QUE OCASIONA TODO ========>", error);
        res.status(440).json("NOT FOUND");
    }
});

router.get("/:id", (req, res) => {
    try {
        let id = Number(req.params.id);

        let productFound = marketProducts.find((car) => car.id === id);
        console.log(productFound);
        res.status(220).json(productFound);
    } catch (error) {
        console.log(error);
        res.status(440).json("ERROR EN LA EJECUCION DE BUSCAR POR ID");
    }
});

router.post("/", (req, res) => {
    try {
        let newProduct = req.body;

        console.log(newProduct);
        res.status(220).json("Producto creado correctamente!!");
    } catch (error) {
        res.status(440).json("Error al crear el producto");
    }
});

router.patch("/", (req, res) => {
    console.log("Entrada a la ruta PATCH");
    res.send("Hello PATCH");
});

module.exports = router;
