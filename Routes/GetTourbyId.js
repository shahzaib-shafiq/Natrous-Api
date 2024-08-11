const express = require("express");
const router = express.Router();
const { GetTourbyid } = require("../Controller/GetTourbyId");

router.get("/v1/tours/:id", GetTourbyid);
module.exports = router;
