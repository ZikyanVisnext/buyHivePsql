const ProductService = require("../services/ProductService.js");

class ProductController {
  static async getAllProduct(req, res) {
    try {
      const response = await ProductService.getAllProduct();
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getProductByCategory(req, res) {
    try {
      const response = await ProductService.getProductByCategory(req);
      res.status(200).send(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProductController;
