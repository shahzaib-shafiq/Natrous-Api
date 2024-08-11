const express = require("express");
const router = express.Router();

// Correct the function name to match the export from the controller
const { GetAllTours } = require("../Controller/GetAllTours");
router.get("/v1/tours", GetAllTours);

module.exports = router;
