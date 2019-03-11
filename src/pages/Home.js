import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cover from '../components/Cover';
import Biodata from '../components/Biodata';

class Home extends Component {
	render() {
    	return (
      		<div className="Home">
				<Header />
				<Cover />
				<Biodata />
				<Footer />
      		</div>
    	);
  	}
}

export default Home;
