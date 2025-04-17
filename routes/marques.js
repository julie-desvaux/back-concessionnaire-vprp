const express = require("express");
const router = express.Router();
const { getAllMarqueAutos, addMarqueAuto } = require("../controllers/marques");

router.get("/", getAllMarqueAutos);
router.post("/", addMarqueAuto);

module.exports = router;
