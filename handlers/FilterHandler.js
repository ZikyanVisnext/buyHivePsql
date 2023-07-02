const pool = require("../db");
const FilterQueries = require("../queries/FilterQueries.js");

class FilterHandler {
  static async getAllFilters(queryParams) {
    return new Promise((resolve, reject) => {
      const { query, values } = FilterQueries.getAllFiltersQuery(queryParams);
      pool.query(query, values, (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      });
    });
  }

  static async getPrice(queryParams) {
    return new Promise((resolve, reject) => {
      const { query, values } = FilterQueries.getPriceQuery(queryParams);
      pool.query(query, values, (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      });
    });
  }
}

module.exports = FilterHandler;
