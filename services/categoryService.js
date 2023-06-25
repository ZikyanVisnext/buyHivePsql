const CategoryHandler = require("../handlers/categoryHandler.js");

class CategoryService {
  static async getCategory(req, res) {
    try {
      CategoryHandler.getCategory(req, res);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CategoryService;
