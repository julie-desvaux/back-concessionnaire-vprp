const express = require("express");
const router = express.Router();
const {
	getAllTypesMotos,
	getAllMotos,
	getAllMotosByType,
	getAllMotosByTypeWithFilters,
	getMotoById,
	addMoto,
	getAllTypes,
	addType,
} = require("../controllers/motos");

router.get("/type", getAllTypesMotos);

router.post("/type", getAllMotos);

router.get("/type/:slug", getAllMotosByType);

router.get("/model", getAllMotosByTypeWithFilters);

router.get("/model/:id", getMotoById);

router.post("/model", addMoto);

router.get("/type", getAllTypes);

router.post("/type", addType);

module.exports = router;
