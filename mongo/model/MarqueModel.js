const mongoose = require("mongoose");

const MarqueModel = mongoose.model(
  "Marque",
  new mongoose.Schema(
    {
      marque: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = MarqueModel;
