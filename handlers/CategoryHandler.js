const pool = require("../db");
const CategoryQueries = require("../queries/CategoryQueries.js");

class CategoryHandler {
  static getCategory() {
    return new Promise((resolve, reject) => {
      pool.query(CategoryQueries.getAllCategoryQuery(), (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      });
    });
  }
}

module.exports = CategoryHandler;
