import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Footer from "../components/Footer";
import Cover from '../components/Cover';
import Biodata from '../components/Biodata';
import {Redirect} from "react-router-dom";

class Home extends Component {
	render() {
		const is_login = JSON.parse(localStorage.getItem("is_login"));
		if(is_login === null){
			return <Redirect to={{pathname: "/signin"}} />;
		} else {
			return (
				<div className="Home">
					<Cover />
					<Biodata />
					<Footer />
				</div>
			);
		}
  	}
}

export default Home;
