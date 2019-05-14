import React from "react";

import { Navbar } from "../component/navbar.js";
import { Jumbotron } from "../component/jumbotron.js";
import { Card } from "../component/card.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron />
				<Card />
			</div>
		);
	}
}
