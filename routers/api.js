const express = require("express");
const router = express.Router();

router.use("/marque", require("./MarqueRoutes.js"));

module.exports = router;
