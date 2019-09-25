const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
	start: Date,
	end: Date,
	title: String
});

mongoose.model("events", eventSchema);
