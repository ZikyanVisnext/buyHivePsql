const FilterHandler = require("../handlers/FilterHandler.js");

class FilterService {
  static async getAllFilters(req) {
    const { category } = req.query;
    const queryParams = {
      category: category,
    };
    const response = await FilterHandler.getAllFilters(queryParams);
    return response;
  }

  static async getPrice(req) {
    const { category } = req.query;
    const queryParams = {
      category: category,
    };
    const response = await FilterHandler.getPrice(queryParams);
    return response;
  }
}

module.exports = FilterService;
