const mongoose = require("mongoose");

const MarqueVelo = mongoose.model(
  "MarqueVelo",
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

module.exports = MarqueVelo;
