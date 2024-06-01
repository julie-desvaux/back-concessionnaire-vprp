const express = require("express");
const router = express.Router();
const { getAllTypes, addType } = require("../controllers/typevl");

router.get("/", getAllTypes);

router.post("/", addType);

module.exports = router;
