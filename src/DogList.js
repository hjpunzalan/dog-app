import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_DogList.scss';

export default class DogList extends Component {
	render() {
		return (
			<div className="DogList">
				<h1 className="display-1 text-center">Dog List!</h1>
				<div className="row">
					{this.props.dogs.map(d => (
						<div key={d.name} className="Dog col-lg-4 text-center">
							<img className="Dog__img mt-4" src={d.src} alt={d.name} />
							<h3 className="Dog__name mt-3">
								<Link className="Dog__name-link" to={`/dogs/${d.name}`}>
									{d.name}
								</Link>
							</h3>
						</div>
					))}
				</div>
			</div>
		);
	}
}
