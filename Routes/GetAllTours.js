const express = require("express");
const router = express.Router();
const { getAlTours } = require("../Controller/GetAllTours");
router.get("/v1/tours", getAlTours);
module.exports = router;
