const mongoose = require("mongoose");

const MarqueScooter = mongoose.model(
  "MarqueScooter",
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

module.exports = MarqueScooter;
