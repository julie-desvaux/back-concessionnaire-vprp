const mongoose = require("mongoose");

const MarqueQuad = mongoose.model(
  "MarqueQuad",
  new mongoose.Schema(
    {
      marque: { type: String, required: true },
      slug: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = MarqueQuad;
