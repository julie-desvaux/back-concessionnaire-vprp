const TypeVL = require("../mongo/model/TypeVL");
const Model = require("../mongo/model/ModelModel");

const getAllAutos = async (req, res) => {
	const types = await Model.find().populate("type").populate("marque").exec();
	if (types) {
		res.json(types);
	} else {
		res.json({ error: "notFound" });
	}
};

const getAllTypeAutos = async (req, res) => {
	const types = await TypeVL.find();
	if (types) {
		res.json(types);
	} else {
		res.json({ error: "notFound" });
	}
};

const addTypeAuto = async (req, res) => {
	try {
		const type = await TypeVL.create(req.body);
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

const getAllCarsByType = async (req, res) => {
	const slug = req.params.slug;
	const allCarsType = await Model.find()
		.sort({ price: 1 })
		.populate({ path: "type", match: { slug: slug } })
		.exec();

	if (allCarsType) {
		const carsType = allCarsType.filter((car) => car.type !== null);
		res.json(carsType);
	} else {
		res.json({ error: "notFound" });
	}
};

const getAllCarsByTypeWithFilters = async (req, res) => {
	const filters = req.query; // Les filtres seront dans req.query

	if (filters) {
		// Construire la requête de recherche en fonction des filtres
		const query = Model.find().populate("type");
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
		const models = await Model.find().populate("type").exec();
		if (models) {
			res.json(models);
		} else {
			res.json({ error: "notFound" });
		}
	}
};

const getCarById = async (req, res) => {
	const id = req.params.id;
	const model = await Model.findById(id).populate("type").populate("marque").exec();
	if (model) {
		res.json(model);
	} else {
		res.json({ error: "notFound" });
	}
};

const updateCarById = async (req, res) => {
	const id = req.params.id;
	const filter = { id };
	const update = req.body;
	const model = await Model.findOneAndUpdate(filter, update, {
		new: true,
	})
		.populate("type")
		.exec();
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
	getAllAutos,
	getAllTypeAutos,
	addTypeAuto,
	getAllCarsByType,
	getAllCarsByTypeWithFilters,
	getCarById,
	updateCarById,
	addCar,
};
