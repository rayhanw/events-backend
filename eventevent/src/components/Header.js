import React from "react";

import { Link } from "react-router-dom";

import "./styles/Header.css";

const Header = () => {
	return (
		<div className="Header">
			<Link to="/">Home</Link>
			<Link to="/new">New Event</Link>
		</div>
	);
};

export default Header;
