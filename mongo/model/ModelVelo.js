const mongoose = require("mongoose");

const ModelVelo = mongoose.model(
  "ModelVelo",
  new mongoose.Schema(
    {
      model: { type: String, required: true },
      price: { type: Number, required: true },
      vmax: { type: Number },
      slug: { type: String, required: true },
      images: [{ type: String }],
      marque: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MarqueVelo",
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

module.exports = ModelVelo;
