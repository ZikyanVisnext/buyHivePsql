const express = require("express");
const categoryController = require("../../controllers/categoryController.js");

const router = express.Router();

router.get("/", categoryController.getCategory);

module.exports = router;
