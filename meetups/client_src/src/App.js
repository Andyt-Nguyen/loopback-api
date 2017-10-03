import React from 'react';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => (
	<div>
		<NavBar />
		<div className="container">
			<Main />
		</div>

		<div className="fixed-action-btn">
			<Link
				className="btn-floating btn-lrg red"
			 	to="/meetups/add"><i className="fa fa-plus"></i></Link>
		</div>
	</div>
);

export default App;
