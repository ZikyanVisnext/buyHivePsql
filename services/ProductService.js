const ProductHandler = require("../handlers/ProductHandler.js");

class ProductService {
  static async getAllProduct() {
    const response = await ProductHandler.getAllProduct();
    return response;
  }

  static async getProductByCategory(req) {
    const { keyword, category, sort_by, moq, country, usa_stock, min_price, max_price, supplier, certificates } = req.query;
    const queryParams = {
      keyword: keyword,
      category: category,
      sort_by: sort_by,
      moq: moq,
      country: country,
      usa_stock: usa_stock,
      min_price: min_price,
      max_price: max_price,
      supplier: supplier,
      certificates: certificates
    };
    const response = await ProductHandler.getProductByCategory(queryParams);
    return response;
  }
}

module.exports = ProductService;
