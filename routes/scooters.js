const express = require("express");
const router = express.Router();
const {
  getAllMarquesScooters,
  addMarqueScooter,
  getAllScootersByMarque,
  getAllScootersByMarqueWithFilters,
  getScooterById,
  addScooter,
  getAllTypes,
  addType,
} = require("../controllers/scooters");

router.get("/marque", getAllMarquesScooters);

router.post("/marque", addMarqueScooter);

router.get("/marque/:slug", getAllScootersByMarque);

router.get("/model", getAllScootersByMarqueWithFilters);

router.get("/model/:id", getScooterById);

router.post("/model", addScooter);

router.get("/type", getAllTypes);

router.post("/type", addType);

module.exports = router;
