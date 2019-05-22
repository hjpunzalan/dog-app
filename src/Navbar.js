import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		const dogLinks = this.props.dogs.map(d => (
			<li className="nav-item" key={d.name}>
				<NavLink exact to={`/dogs/${d.name}`} className="nav-link">
					{d.name}
				</NavLink>
			</li>
		));
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link className="navbar-brand" to="/dogs">
						DogApp
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<NavLink exact to="/dogs" className="nav-link">
									Home
								</NavLink>
							</li>
							{dogLinks}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
