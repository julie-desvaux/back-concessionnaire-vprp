const MarqueQuad = require("../mongo/model/MarqueQuad");
const ModelQuad = require("../mongo/model/ModelQuad");
const TypeMoto = require("../mongo/model/TypeMoto");

const getAllMarquesQuads = async (req, res) => {
	console.log("getAllMarquesQuads");
	const marques = await MarqueQuad.find().exec();
	if (marques) {
		res.json(marques);
	} else {
		res.json({ error: "notFound" });
	}
};

const addMarqueQuad = async (req, res) => {
	try {
		const marque = await MarqueQuad.create(req.body);
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

const getAllQuadsByMarque = async (req, res) => {
	const slug = req.params.slug;
	const allQuadsMarque = await ModelQuad.find()
		.sort({ price: 1 })
		.populate({ path: "marque", match: { slug } })
		.exec();

	if (allQuadsMarque) {
		const QuadsMarque = allQuadsMarque.filter((quad) => quad.marque !== null);
		res.json(QuadsMarque);
	} else {
		res.json({ error: "notFound" });
	}
};

const getAllQuadsByMarqueWithFilters = async (req, res) => {
	const filters = req.query; // Les filtres seront dans req.query

	if (filters) {
		// Construire la requête de recherche en fonction des filtres
		const query = ModelQuad.find().populate("marque");
		if (filters.nouveau) {
			query.where("isNew").equals(filters.nouveau);
		}
		if (filters.priceMin) {
			query.where("price").gte(filters.priceMin);
		}
		if (filters.priceMax) {
			query.where("price").lte(filters.priceMax);
		}

		// Exécuter la requête
		const models = await query.exec();

		if (models) {
			res.json(models);
		} else {
			res.json({ error: "notFound" });
		}
	} else {
		const models = await (await ModelQuad.find().populate("marque")).exec();
		if (models) {
			res.json(models);
		} else {
			res.json({ error: "notFound" });
		}
	}
};

const getQuadById = async (req, res) => {
	const id = req.params.id;
	const model = await ModelQuad.findById(id).populate("marque").exec();
	if (model) {
		res.json(model);
	} else {
		res.json({ error: "notFound" });
	}
};

const addQuad = async (req, res) => {
	try {
		const model = await ModelQuad.create(req.body);
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
	getAllMarquesQuads,
	addMarqueQuad,
	getAllQuadsByMarque,
	getAllQuadsByMarqueWithFilters,
	getQuadById,
	addQuad,
	getAllTypes,
	addType,
};
