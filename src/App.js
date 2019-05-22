import React, { Component } from 'react';
import './_App.scss';
import { Switch, Route } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Navbar from './Navbar';
import whiskey from './imgs/whiskey.jpg';
import tubby from './imgs/tubby.jpg';
import hazel from './imgs/hazel.jpg';

class App extends Component {
	static defaultProps = {
		dogs: [
			{
				name: 'Whiskey',
				age: 5,
				src: whiskey,
				facts: [
					'Whiskey loves eating popcorn.',
					'Whiskey is a terrible guard dog.',
					'Whiskey wants to cuddle with you!'
				]
			},
			{
				name: 'Hazel',
				age: 3,
				src: hazel,
				facts: [
					'Hazel has soooo much energy!',
					'Hazel is highly intelligent.',
					'Hazel loves people more than dogs.'
				]
			},
			{
				name: 'Tubby',
				age: 4,
				src: tubby,
				facts: [
					'Tubby is not the brightest dog',
					'Tubby does not like walks or exercise.',
					'Tubby loves eating food.',
					'Tubby likes Rina'
				]
			}
		]
	};

	render() {
		// Props gets pass down from Route
		const getDog = props => {
			let name = props.match.params.name;
			let currentDog = this.props.dogs.find(
				d => d.name.toLowerCase() === name.toLowerCase()
			);
			return <DogDetails {...props} dog={currentDog} />;
		};
		return (
			<div className="App">
				<Navbar dogs={this.props.dogs} />
				<Switch>
					<Route
						exact
						path="/dogs"
						render={() => <DogList dogs={this.props.dogs} />}
					/>
					<Route exact path="/dogs/:name" render={getDog} />
				</Switch>
			</div>
		);
	}
}

export default App;
