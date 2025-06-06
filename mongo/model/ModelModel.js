const mongoose = require("mongoose");

const ModelModel = mongoose.model(
	"Model",
	new mongoose.Schema(
		{
			model: { type: String, required: true },
			price: { type: Number, required: true },
			vmax: { type: Number },
			slug: { type: String, required: true },
			images: [{ type: String }],
			type: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "TypeVL",
				required: true,
			},
			marque: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Marque",
				required: true,
			},
			isNew: { type: Boolean, default: false },
			extras: [{ type: String }],
		},
		{
			timestamps: true,
		}
	)
);

module.exports = ModelModel;
