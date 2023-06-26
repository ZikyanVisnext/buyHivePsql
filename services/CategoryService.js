const CategoryHandler = require("../handlers/CategoryHandler.js");

class CategoryService {
  static async getCategory() {
    const response = await CategoryHandler.getCategory();
    return response;
  }
}

module.exports = CategoryService;
