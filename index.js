const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ENV = require("dotenv").config();
const PORT = process.env.PORT || 3001;

require("./models/Event");

const mongo_url = process.env.MONGO || ENV.parsed.MONGO;

mongoose.connect(mongo_url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const app = express();

app.use(cors());
app.use(express.json());
require("./routes/eventRoutes")(app);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("eventevent/build"));
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "eventevent", "build", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log("Server is listening on PORT: ", PORT);
});
