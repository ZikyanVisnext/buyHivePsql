const ProductHandler = require("../handlers/productHandler.js");

class ProductService {
  static async getAllProduct(req, res) {
    try {
      ProductHandler.getAllProduct(req, res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getProductByCategory(req, res) {
    try {
      ProductHandler.getProductByCategory(req, res);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProductService;
