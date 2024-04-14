const express = require("express");
const router = express.Router();
const { allMarques, marqueById } = require("../controllers/marque");

router.get("/marque", allMarques);
router.get("/marque/:marqueId", marqueById);

module.exports = router;
