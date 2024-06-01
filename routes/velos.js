const express = require("express");
const router = express.Router();
const {
  getAllMarquesVelos,
  addMarqueVelo,
  getAllVelosByMarque,
  getAllVelosByMarqueWithFilters,
  getVeloById,
  addVelo,
  getAllTypes,
  addType,
} = require("../controllers/velos");

router.get("/marque", getAllMarquesVelos);

router.post("/marque", addMarqueVelo);

router.get("/marque/:slug", getAllVelosByMarque);

router.get("/model", getAllVelosByMarqueWithFilters);

router.get("/model/:id", getVeloById);

router.post("/model", addVelo);

router.get("/type", getAllTypes);

router.post("/type", addType);

module.exports = router;
