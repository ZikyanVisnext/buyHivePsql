const express = require("express");
const productRoutes = require("./api/Products.js");
const categoryRoutes = require("./api/Category.js");
const filterRoutes = require("./api/Filters.js");

const router = express.Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/filters", filterRoutes);

module.exports = router;
