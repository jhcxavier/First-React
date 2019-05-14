import React from "react";

//create your first component
export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-dark row fixed-top">
					<a className="navbar-brand text-white col-2" href="#">
						Navbar
					</a>
					<a className="navbar-brand col-4" href="#" />
					<div
						className="justify-content-end collapse navbar-collapse"
						id="navbarNavDropdown">
						<ul className="navbar-nav col-6">
							<li className="nav-item active">
								<a className="nav-link text-white" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link text-muted" href="#">
									About{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-muted" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-muted" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
