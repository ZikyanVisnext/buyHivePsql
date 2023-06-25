const pool = require("../db");
const ProductQueries = require("../queries/productQueries");

class ProductHandler {
  static async getAllProduct(req, res) {
    try {
      pool.query(ProductQueries.getAllProductQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getProductByCategory(req, res) {
    try {
      const { keyword, category, sort_by } = req.query;
      const { query, values } = ProductQueries.getProductByCategoryQuery({ keyword, category, sort_by });
      pool.query(query, values, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProductHandler;
