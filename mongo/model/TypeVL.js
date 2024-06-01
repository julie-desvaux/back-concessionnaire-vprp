const mongoose = require("mongoose");

const TypeVL = mongoose.model(
  "TypeVL",
  new mongoose.Schema(
    {
      type: { type: String, required: true },
      slug: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = TypeVL;
