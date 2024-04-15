const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
  path: ".env",
});
const Marque = require("./mongo/model/MarqueModel");
const Model = require("./mongo/model/ModelModel");

const app = express();
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB");
  });

app.use(express.json());

app.get("/api/marque", async (req, res) => {
  const marques = await Marque.find();
  if (marques) {
    res.json(marques);
  } else {
    res.json({ error: "notFound" });
  }
});

app.get("/api/marque/:slug", async (req, res) => {
  const slug = req.params.slug;
  const allCarsMarque = await Model.find({ marque: { slug } })
    .populate("marque")
    .exec();
  if (allCarsMarque) {
    res.json(allCarsMarque);
  } else {
    res.json({ error: "notFound" });
  }
});

app.get("/api/model", async (req, res) => {
  const models = await Model.find().populate("marque").exec();
  if (models) {
    res.json(models);
  } else {
    res.json({ error: "notFound" });
  }
});

app.get("/api/model/:id", async (req, res) => {
  const id = req.params.id;
  const model = await Model.findById(id).populate("marque").exec();
  if (model) {
    res.json(model);
  } else {
    res.json({ error: "notFound" });
  }
});

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
});
