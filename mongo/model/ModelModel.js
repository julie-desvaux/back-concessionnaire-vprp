const mongoose = require("mongoose");

const ModelModel = mongoose.model(
  "Model",
  new mongoose.Schema(
    {
      model: { type: String, required: true },
      price: { type: Number, required: true },
      vmax: { type: Number },
      image: [{ type: String }],
      marque: { type: schema.Types.ObjectId, ref: "Marque", required: true },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = ModelModel;
