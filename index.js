const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ENV = require("dotenv").config();
const PORT = process.env.PORT || 3001;

require("./models/Event");

mongoose.connect(ENV.parsed.MONGO, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, function() {
	console.log("Server is listening on PORT: ", PORT);
});

// IIFE?
require("./routes/eventRoutes")(app);
