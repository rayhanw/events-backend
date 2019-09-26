import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tags from "../SEO/Tags";
import Header from "./Header";
import NewEvent from "../pages/NewEvent";
import Home from "../pages/Home";

import history from "../history";

import "./styles/App.css";

const App = () => {
	return (
		<div>
			<Tags />

			<Router history={history}>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/new" exact component={NewEvent} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
