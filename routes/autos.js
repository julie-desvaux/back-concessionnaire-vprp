const express = require("express");
const router = express.Router();
const {
	getAllAutos,
	getAllTypeAutos,
	addTypeAuto,
	getAllCarsByType,
	getAllCarsByTypeWithFilters,
	getCarById,
	addCar,
	updateCarById,
} = require("../controllers/autos");

router.get("/", getAllAutos);

router.get("/type", getAllTypeAutos);

router.post("/type", addTypeAuto);

router.get("/type/:slug", getAllCarsByType);

router.get("/model", getAllCarsByTypeWithFilters);

router.get("/model/:id", getCarById);

router.post("/model", addCar);

router.patch("/model/:id", updateCarById);

module.exports = router;
