const express = require("express");
const router = express.Router();
const {
  getAllMarquesMotos,
  addMarqueMoto,
  getAllMotosByMarque,
  getAllMotosByMarqueWithFilters,
  getMotoById,
  addMoto,
  getAllTypes,
  addType,
} = require("../controllers/motos");

router.get("/marque", getAllMarquesMotos);

router.post("/marque", addMarqueMoto);

router.get("/marque/:slug", getAllMotosByMarque);

router.get("/model", getAllMotosByMarqueWithFilters);

router.get("/model/:id", getMotoById);

router.post("/model", addMoto);

router.get("/type", getAllTypes);

router.post("/type", addType);

module.exports = router;
