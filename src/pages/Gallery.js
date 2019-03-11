import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Galeri from '../components/Galeri';

class Gallery extends Component {
	render() {
    	return (
      		<div className="Gallery">
				<Header />
				<Galeri />
				<Footer />
      		</div>
    	);
  	}
}

export default Gallery;