const CategoryService = require("../services/CategoryService.js");

class CategoryController {
  static async getCategory(req, res) {
    try {
      const response = await CategoryService.getCategory();
      res.status(200).send(response)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = CategoryController;
