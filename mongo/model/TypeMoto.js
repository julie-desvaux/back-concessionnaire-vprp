const mongoose = require("mongoose");

const TypeMoto = mongoose.model(
  "TypeMoto",
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

module.exports = TypeMoto;
