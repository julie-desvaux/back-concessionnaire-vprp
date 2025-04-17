const Marque = require("../mongo/model/MarqueModel");

const getAllMarqueAutos = async (req, res) => {
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

module.exports = {
	getAllMarqueAutos,
	addMarqueAuto,
};
