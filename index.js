const express = require("express");
const cors = require("cors");
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
app.use(express.json());
app.use("/api", require("./routers/api.js"));

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
});
