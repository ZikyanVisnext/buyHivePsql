const express = require("express");
const productController = require("../../controllers/ProductController.js");

const router = express.Router();

router.get("/", productController.getAllProduct);
router.get("/search", productController.getProductByCategory);

module.exports = router;
