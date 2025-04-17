const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
	path: ".env",
});
const autos = require("./routes/autos");
const motos = require("./routes/motos");
const quads = require("./routes/quads");
const scooters = require("./routes/scooters");
const velos = require("./routes/velos");
const typevl = require("./routes/typevl");
const marques = require("./routes/marques");

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
console.log("Backend VPRP");

mongoose
	.connect(process.env.MONGO_URI, { useNewUrlParser: true })
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch(() => {
		console.log("Couldn't connect to MongoDB");
	});

app.use(express.json());

app.use("/api/autos", autos);
app.use("/api/motos", motos);
app.use("/api/quads", quads);
app.use("/api/scooters", scooters);
app.use("/api/velos", velos);
app.use("/api/typevl", typevl);
app.use("/api/marques", marques);

app.listen(PORT, async () => {
	console.log(`App listening on port ${PORT}`);
});
