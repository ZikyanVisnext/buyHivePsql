const pool = require("../db");
const CategoryQueries = require("../queries/categoryQueries");

class CategoryHandler {
  static async getCategory(req, res) {
    try {
      pool.query(CategoryQueries.getAllCategoryQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CategoryHandler;
