const express = require("express");
const router = express.Router();
const { Patchtour } = require("../Controller/PatchTour");

router.patch("/v1/tours/:id", Patchtour);
module.exports = router;
