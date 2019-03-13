import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Footer from "../components/Footer";
import Galeri from '../components/Galeri';

class Gallery extends Component {
	render() {
    	return (
      		<div className="Gallery">
				<Galeri />
				<Footer />
      		</div>
    	);
  	}
}

export default Gallery;