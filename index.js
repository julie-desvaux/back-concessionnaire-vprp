const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
  path: ".env",
});
const Marque = require("./mongo/model/MarqueModel");

const app = express();

const PORT = process.env.PORT || 8080;

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB");
  });

app.use(express.json());
// app.use("/api/", require("./routers/api.js"));

app.get("/api/marque", async (req, res) => {
  const marques = await Marque.find();
  if (marques) {
    res.json(marques);
  } else {
    res.json({ error: "notFound" });
  }
});

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
});
