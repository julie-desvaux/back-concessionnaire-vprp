const Marque = require("../mongo/model/MarqueModel");
const Model = require("../mongo/model/ModelModel");

const getAllMarquesAutos = async (req, res) => {
  const marques = await Marque.find();
  if (marques) {
    res.json(marques);
  } else {
    res.json({ error: "notFound" });
  }
};

const addMarqueAuto = async (req, res) => {
  try {
    const marque = await Marque.create(req.body);
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

const getAllCarsByMarque = async (req, res) => {
  const slug = req.params.slug;
  const allCarsMarque = await Model.find()
    .sort({ price: 1 })
    .populate({ path: "marque", match: { slug: slug } })
    .exec();

  if (allCarsMarque) {
    const carsMarque = allCarsMarque.filter((car) => car.marque !== null);
    res.json(carsMarque);
  } else {
    res.json({ error: "notFound" });
  }
};

const getAllCarsByMarqueWithFilters = async (req, res) => {
  const filters = req.query; // Les filtres seront dans req.query

  if (filters) {
    // Construire la requête de recherche en fonction des filtres
    const query = Model.find().populate("marque");
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
    const models = await Model.find().populate("marque").exec();
    if (models) {
      res.json(models);
    } else {
      res.json({ error: "notFound" });
    }
  }
};

const getCarById = async (req, res) => {
  const id = req.params.id;
  const model = await Model.findById(id).populate("marque").exec();
  if (model) {
    res.json(model);
  } else {
    res.json({ error: "notFound" });
  }
};

const addCar = async (req, res) => {
  try {
    const model = await Model.create(req.body);
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

module.exports = {
  getAllMarquesAutos,
  addMarqueAuto,
  getAllCarsByMarque,
  getAllCarsByMarqueWithFilters,
  getCarById,
  addCar,
};
