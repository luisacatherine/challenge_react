import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Footer from "../components/Footer";
import ClassCnbc from '../components/ClassCnbc';
import Category from '../components/Category';

class Cnbc extends Component {
	render() {
    	return (
      		<div className="Cnbc">
			  	<Category />
                <ClassCnbc />
				<Footer />
      		</div>
    	);
  	}
}

export default Cnbc;