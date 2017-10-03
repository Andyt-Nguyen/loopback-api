import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MeetupDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			details: ''
		}
	}

	componentWillMount() {
		this.getMeetUps();
	}

	getMeetUps() {
		let meetupId = this.props.match.params.id;
		let promise = axios.get(`http://localhost:3000/api/meetups/${meetupId}`);
		promise.then( res => this.setState({details:res.data}, () => console.log(this.state)))
					 .catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<Link to="/" className="btn grey">Back</Link> <br />
				<h1>{this.state.details.name}</h1>
				<ul className="collection">
					<li className="collection-item">{this.state.details.city}</li>
					<li className="collection-item">{this.state.details.address}</li>
				</ul>
				<Link className="btn" to={`/meetups/edit/${this.state.details.id}`}>Edit</Link>
				<button className="btn red right">Delete</button>
			</div>
		);
	}
}

export default MeetupDetails;
