const express = require("express");
const router = express.Router();
const {
	getAllTypeAutos,
	addTypeAuto,
	getAllCarsByType,
	getAllCarsByTypeWithFilters,
	getCarById,
	addCar,
} = require("../controllers/autos");

router.get("/type", getAllTypeAutos);

router.post("/type", addTypeAuto);

router.get("/type/:slug", getAllCarsByType);

router.get("/model", getAllCarsByTypeWithFilters);

router.get("/model/:id", getCarById);

router.post("/model", addCar);

module.exports = router;
