import React from "react";

//create your first component
export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid m-3">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron!!!!!!</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</div>
			</div>
		);
	}
}
