const ModelMoto = require("../mongo/model/ModelMoto");
const TypeMoto = require("../mongo/model/TypeMoto");

const getAllTypesMotos = async (req, res) => {
	console.log("getAllTypesMotos");
	const types = await TypeMoto.find().exec();
	if (types) {
		res.json(types);
	} else {
		res.json({ error: "notFound" });
	}
};

const getAllMotos = async (req, res) => {
	const types = await ModelMoto.find().exec();
	if (types) {
		res.json(types);
	} else {
		res.json({ error: "notFound" });
	}
};

const addTypeMoto = async (req, res) => {
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

const getAllMotosByType = async (req, res) => {
	const slug = req.params.slug;
	const allMotosType = await ModelMoto.find().sort({ price: 1 }).populate({ path: "type", match: { slug } }).exec();

	if (allMotosType) {
		const motosType = allMotosType.filter((moto) => moto.type !== null);
		res.json(motosType);
	} else {
		res.json({ error: "notFound" });
	}
};

const getAllMotosByTypeWithFilters = async (req, res) => {
	const filters = req.query; // Les filtres seront dans req.query

	if (filters) {
		// Construire la requête de recherche en fonction des filtres
		const query = ModelMoto.find().populate("type");
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
	getAllTypesMotos,
	getAllMotos,
	addTypeMoto,
	getAllMotosByType,
	getAllMotosByTypeWithFilters,
	getMotoById,
	addMoto,
	getAllTypes,
	addType,
};
