const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
  path: ".env",
});

const app = express();

const PORT = process.env.PORT || 3001;

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB");
  });

app.use(express.json());
app.use("/api", require("./routers/api.js"));

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
});
