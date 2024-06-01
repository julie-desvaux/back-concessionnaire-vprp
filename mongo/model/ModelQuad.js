const mongoose = require("mongoose");

const ModelQuad = mongoose.model(
  "ModelQuad",
  new mongoose.Schema(
    {
      model: { type: String, required: true },
      price: { type: Number, required: true },
      vmax: { type: Number },
      slug: { type: String, required: true },
      images: [{ type: String }],
      marque: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MarqueQuad",
        required: true,
      },
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
      },
      isNew: { type: Boolean, default: false },
      extras: [{ type: String }],
    },
    {
      timestamps: true,
    }
  )
);

module.exports = ModelQuad;
