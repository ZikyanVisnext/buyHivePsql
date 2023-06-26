const express = require("express");
const categoryController = require("../../controllers/CategoryController.js");

const router = express.Router();

router.get("/", categoryController.getCategory);

module.exports = router;
