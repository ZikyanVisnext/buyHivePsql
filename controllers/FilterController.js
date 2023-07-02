const FilterService = require("../services/FilterService.js");

class FilterController {
  static async getAllFilters(req, res) {
    try {
      const response = await FilterService.getAllFilters(req);
      res.status(200).send(response)
    } catch (error) {
      res.status(500).send(error)
    }
  }
  static async getPrice(req, res) {
    try {
      const response = await FilterService.getPrice(req);
      res.status(200).send(response)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = FilterController;
