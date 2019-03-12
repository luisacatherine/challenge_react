import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Footer from "../components/Footer";
import ClassCnn from '../components/ClassCnn';
import Category from '../components/Category';

class Cnn extends Component {
	render() {
    	return (
      		<div className="Cnn">
			  	<Category />
                <ClassCnn />
				<Footer />
      		</div>
    	);
  	}
}

export default Cnn;