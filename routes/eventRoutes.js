const mongoose = require("mongoose");
const Event = mongoose.model("events");

module.exports = app => {
	app.get("/api/events", (req, res) => {
		Event.find({}, function(error, events) {
			if (error) {
				res.render("error", { errorMsg: "Problem!" });
			}
			res.send(events);
		});
	});

	app.post("/api", async (req, res) => {
		const { start, end, title } = req.body;
		const event = await new Event({
			start: new Date(start),
			end: new Date(end),
			title
		}).save();
		res.send(req.body);
	});
};
