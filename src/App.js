import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Home from "./components/Home";
import About from "./components/About";

const App = () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/project-euler">
				<Landing />
			</Route>
			<Route path="/problems/:id">
				<Home />
			</Route>
			<Route path="/about">
				<About />
			</Route>
		</Switch>
	</Router>
);

export default App;
