import React, { Component } from 'react';
import MeetupItem from './MeetupItem';
import axios from 'axios';

class Meetups extends Component {
	constructor() {
		super();
		this.state = {
			meetups: []
		};
	}

	componentWillMount() {
		this.getMeetups();
	}

	getMeetups() {
		let promise = axios.get('http://localhost:3000/api/meetups');
		promise.then( res => this.setState({meetups:res.data}))
					 .catch(err => console.log(err))
	}

	render() {
		const meetUpItems = this.state.meetups.map( (a,i) => (
			<MeetupItem key={a.id} item={a}/>
		));
		return (
			<div>
				<h1>Meetups</h1>
				<ul className="collection">{meetUpItems}</ul>
			</div>
		);
	}
}

export default Meetups;
