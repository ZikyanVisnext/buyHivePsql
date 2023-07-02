const pool = require("../db");
const ProductQueries = require("../queries/ProductQueries.js");

class ProductHandler {
  static getAllProduct() {
    return new Promise((resolve, reject) => {
      pool.query(ProductQueries.getAllProductQuery(), (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      });
    });
  }

  static async getProductByCategory(queryParams) {
    return new Promise((resolve, reject) => {
      const { query, values } =
        ProductQueries.getProductByCategoryQuery(queryParams);
      pool.query(query, values, (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      });
    });
  }
}

module.exports = ProductHandler;
