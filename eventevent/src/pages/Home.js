import React from "react";
import BigCalendar from "../components/Calendar";

const Home = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Shared Worldwide Calendar</h1>
			<BigCalendar id="1" />
		</div>
	);
};

export default Home;
