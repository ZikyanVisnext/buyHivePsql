const express = require("express");
const filterController = require("../../controllers/FilterController.js");

const router = express.Router();

router.get("/search-filter", filterController.getAllFilters);
router.get("/price", filterController.getPrice);

module.exports = router;
