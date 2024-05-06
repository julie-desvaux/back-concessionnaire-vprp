const mongoose = require("mongoose");

const MarqueMoto = mongoose.model(
  "MarqueMoto",
  new mongoose.Schema(
    {
      marque: { type: String, required: true },
      slug: { type: String, required: true },
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = MarqueMoto;
