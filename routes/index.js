const express = require("express");
const productRoutes = require("./api/Products.js");
const categoryRoutes = require("./api/Category.js");

const router = express.Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
