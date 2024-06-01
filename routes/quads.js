const express = require("express");
const router = express.Router();
const {
  getAllMarquesQuads,
  addMarqueQuad,
  getAllQuadsByMarque,
  getAllQuadsByMarqueWithFilters,
  getQuadById,
  addQuad,
  getAllTypes,
  addType,
} = require("../controllers/quads");

router.get("/marque", getAllMarquesQuads);

router.post("/marque", addMarqueQuad);

router.get("/marque/:slug", getAllQuadsByMarque);

router.get("/model", getAllQuadsByMarqueWithFilters);

router.get("/model/:id", getQuadById);

router.post("/model", addQuad);

router.get("/type", getAllTypes);

router.post("/type", addType);

module.exports = router;
