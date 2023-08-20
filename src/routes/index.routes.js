const { Router } = require("express");
const router = Router();
const productRoutes = require("./product.routes");
const categoryRoutes = require("./category.routes");

// GET DE EJEMPLO localhost:3000/
router.get("/", (req,res) => {
  res.send("GET de prueba / sola");
});

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
//router.use("/category", );

module.exports = router;
