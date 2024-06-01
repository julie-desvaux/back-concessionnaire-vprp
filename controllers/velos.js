const MarqueVelo = require("../mongo/model/MarqueVelo");
const ModelVelo = require("../mongo/model/ModelVelo");
const TypeMoto = require("../mongo/model/TypeMoto");

const getAllMarquesVelos = async (req, res) => {
  console.log("getAllMarquesVelos");
  const marques = await MarqueVelo.find().populate("marque").exec();
  if (marques) {
    res.json(marques);
  } else {
    res.json({ error: "notFound" });
  }
};

const addMarqueVelo = async (req, res) => {
  try {
    const marque = await MarqueVelo.create(req.body);
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

const getAllVelosByMarque = async (req, res) => {
  const slug = req.params.slug;
  const allVelosMarque = await ModelVelo.find()
    .sort({ price: 1 })
    .populate({ path: "marque", match: { slug } })
    .exec();

  if (allVelosMarque) {
    const VelosMarque = allVelosMarque.filter((velo) => velo.marque !== null);
    res.json(VelosMarque);
  } else {
    res.json({ error: "notFound" });
  }
};

const getAllVelosByMarqueWithFilters = async (req, res) => {
  const filters = req.query; // Les filtres seront dans req.query

  if (filters) {
    // Construire la requête de recherche en fonction des filtres
    const query = ModelVelo.find().populate("marque");
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
    const models = await ModelVelo.find().populate("marque").exec();
    if (models) {
      res.json(models);
    } else {
      res.json({ error: "notFound" });
    }
  }
};

const getVeloById = async (req, res) => {
  const id = req.params.id;
  const model = await ModelVelo.findById(id).populate("marque").exec();
  if (model) {
    res.json(model);
  } else {
    res.json({ error: "notFound" });
  }
};

const addVelo = async (req, res) => {
  try {
    const model = await ModelVelo.create(req.body);
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
  getAllMarquesVelos,
  addMarqueVelo,
  getAllVelosByMarque,
  getAllVelosByMarqueWithFilters,
  getVeloById,
  addVelo,
  getAllTypes,
  addType,
};
