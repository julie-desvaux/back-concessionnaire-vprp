const mongoose = require("mongoose");

const ModelScooter = mongoose.model(
  "ModelScooter",
  new mongoose.Schema(
    {
      model: { type: String, required: true },
      price: { type: Number, required: true },
      vmax: { type: Number },
      slug: { type: String, required: true },
      images: [{ type: String }],
      marque: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MarqueScooter",
        required: true,
      },
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
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

module.exports = ModelScooter;
