const MarqueMoto = require("../mongo/model/MarqueMoto");
const ModelMoto = require("../mongo/model/ModelMoto");
const TypeMoto = require("../mongo/model/TypeMoto");

const getAllMarquesMotos = async (req, res) => {
  console.log("getAllMarquesMotos");
  const marques = await MarqueMoto.find().exec();
  if (marques) {
    res.json(marques);
  } else {
    res.json({ error: "notFound" });
  }
};

const addMarqueMoto = async (req, res) => {
  try {
    const marque = await MarqueMoto.create(req.body);
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

const getAllMotosByMarque = async (req, res) => {
  const slug = req.params.slug;
  const allMotosMarque = await ModelMoto.find()
    .sort({ price: 1 })
    .populate({ path: "marque", match: { slug } })
    .exec();

  if (allMotosMarque) {
    const motosMarque = allMotosMarque.filter((moto) => moto.marque !== null);
    res.json(motosMarque);
  } else {
    res.json({ error: "notFound" });
  }
};

const getAllMotosByMarqueWithFilters = async (req, res) => {
  const filters = req.query; // Les filtres seront dans req.query

  if (filters) {
    // Construire la requête de recherche en fonction des filtres
    const query = ModelMoto.find().populate("marque");
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
    const models = await (await ModelMoto.find().populate("marque")).exec();
    if (models) {
      res.json(models);
    } else {
      res.json({ error: "notFound" });
    }
  }
};

const getMotoById = async (req, res) => {
  const id = req.params.id;
  const model = await ModelMoto.findById(id).populate("marque").exec();
  if (model) {
    res.json(model);
  } else {
    res.json({ error: "notFound" });
  }
};

const addMoto = async (req, res) => {
  try {
    const model = await ModelMoto.create(req.body);
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
  getAllMarquesMotos,
  addMarqueMoto,
  getAllMotosByMarque,
  getAllMotosByMarqueWithFilters,
  getMotoById,
  addMoto,
  getAllTypes,
  addType,
};
