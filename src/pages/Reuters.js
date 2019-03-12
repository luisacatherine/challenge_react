import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Footer from "../components/Footer";
import ClassReuters from '../components/ClassReuters';
import Category from '../components/Category';

class Reuters extends Component {
	render() {
    	return (
      		<div className="Reuters">
			  	<Category />
                <ClassReuters />
				<Footer />
      		</div>
    	);
  	}
}

export default Reuters;