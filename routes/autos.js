const express = require("express");
const router = express.Router();
const {
  getAllMarquesAutos,
  addMarqueAuto,
  getAllCarsByMarque,
  getAllCarsByMarqueWithFilters,
  getCarById,
  addCar,
} = require("../controllers/autos");

router.get("/marque", getAllMarquesAutos);

router.post("/marque", addMarqueAuto);

router.get("/marque/:slug", getAllCarsByMarque);

router.get("/model", getAllCarsByMarqueWithFilters);

router.get("/model/:id", getCarById);

router.post("/model", addCar);

module.exports = router;
