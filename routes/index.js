const express = require("express");
const productRoutes = require("./api/products.js");
const categoryRoutes = require("./api/category.js");

const router = express.Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
