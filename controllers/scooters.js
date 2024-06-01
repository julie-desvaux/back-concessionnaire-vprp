const MarqueScooter = require("../mongo/model/MarqueScooter");
const ModelScooter = require("../mongo/model/ModelScooter");
const TypeMoto = require("../mongo/model/TypeMoto");

const getAllMarquesScooters = async (req, res) => {
  console.log("getAllMarquesScooters");
  const marques = await MarqueScooter.find().populate("type").exec();
  if (marques) {
    res.json(marques);
  } else {
    res.json({ error: "notFound" });
  }
};

const addMarqueScooter = async (req, res) => {
  try {
    const marque = await MarqueScooter.create(req.body);
    res.json({
      success: true,
      data: marque,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

const getAllScootersByMarque = async (req, res) => {
  const slug = req.params.slug;
  const allScootersMarque = await ModelScooter.find()
    .sort({ price: 1 })
    .populate({ path: "marque", match: { slug } })
    .exec();

  if (allScootersMarque) {
    const ScootersMarque = allScootersMarque.filter(
      (scooter) => scooter.marque !== null
    );
    res.json(ScootersMarque);
  } else {
    res.json({ error: "notFound" });
  }
};

const getAllScootersByMarqueWithFilters = async (req, res) => {
  const filters = req.query; // Les filtres seront dans req.query

  if (filters) {
    // Construire la requête de recherche en fonction des filtres
    const query = ModelScooter.find().populate("marque");
    if (filters.nouveau) {
      query.where("isNew").equals(filters.nouveau);
    }
    // if (filters.priceMin) {
    //   query.where("price").gte(filters.priceMin);
    // }
    // if (filters.priceMax) {
    //   query.where("price").lte(filters.priceMax);
    // }

    // Exécuter la requête
    const models = await query.exec();

    if (models) {
      res.json(models);
    } else {
      res.json({ error: "notFound" });
    }
  } else {
    const models = await ModelScooter.find().populate("marque").exec();
    if (models) {
      res.json(models);
    } else {
      res.json({ error: "notFound" });
    }
  }
};

const getScooterById = async (req, res) => {
  const id = req.params.id;
  const model = await ModelScooter.findById(id).populate("marque").exec();
  if (model) {
    res.json(model);
  } else {
    res.json({ error: "notFound" });
  }
};

const addScooter = async (req, res) => {
  try {
    const model = await ModelScooter.create(req.body);
    res.json({
      success: true,
      data: model,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

const getAllTypes = async (req, res) => {
  const marques = await TypeMoto.find();
  if (marques) {
    res.json(marques);
  } else {
    res.json({ error: "notFound" });
  }
};

const addType = async (req, res) => {
  try {
    const type = await TypeMoto.create(req.body);
    res.json({
      success: true,
      data: type,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

module.exports = {
  getAllMarquesScooters,
  addMarqueScooter,
  getAllScootersByMarque,
  getAllScootersByMarqueWithFilters,
  getScooterById,
  addScooter,
  getAllTypes,
  addType,
};
