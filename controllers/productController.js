const ProductService = require("../services/productService");

class ProductController {
  static async getAllProduct(req, res) {
    try {
      ProductService.getAllProduct(req, res);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getProductByCategory(req, res) {
    try {
      ProductService.getProductByCategory(req, res);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProductController;
