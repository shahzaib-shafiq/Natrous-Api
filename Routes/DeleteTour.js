const express = require("express");
const router = express.Router();
const { DeleteTour } = require("../Controller/DeleteTour");
router.delete("/v1/tours/:id", DeleteTour);
module.exports = router;
