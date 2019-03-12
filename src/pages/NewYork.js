import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Footer from "../components/Footer";
import ClassNewYork from '../components/ClassNewYork';
import Category from '../components/Category';

class NewYork extends Component {
	render() {
    	return (
      		<div className="NewYork">
			  	<Category />
                <ClassNewYork />
				<Footer />
      		</div>
    	);
  	}
}

export default NewYork;