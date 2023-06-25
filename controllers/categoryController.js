const CategoryService = require("../services/categoryService.js");

class CategoryController {
  static async getCategory(req, res) {
    try {
      CategoryService.getCategory(req, res);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CategoryController;
