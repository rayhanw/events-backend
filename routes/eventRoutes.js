module.exports = app => {
	app.get("/events", (req, res) => {
		res.send({
			events: [
				{
					start: "Mon Sep 23 2019 16:30:30 GMT+0800",
					end: "Fri Sep 28 2019 00:00:00 GMT+0800",
					title: "Go to work"
				},
				{
					start: "Sat Nov 16 2019 00:00:00 GMT+0800",
					end: "Sun Jan 5 2020 00:00:00 GMT+0800",
					title: "Holiday"
				},
				{
					start: "Tue Sep 24 2019 18:30:00 GMT+0800",
					end: "Tue Sep 24 2019 23:00:00 GMT+0800",
					title: "Go Home"
				}
			]
		});
	});
};
