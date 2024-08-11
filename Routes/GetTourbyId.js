const express = require("express");
const router = express.Router();
const { GetTourbyId } = require("../Controller/GetTourbyId");

router.get("/v1/tours/:id", GetTourbyId);
module.exports = router;
