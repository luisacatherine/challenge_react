import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClassBlog from '../components/ClassBlog';

class Blog extends Component {
	render() {
    	return (
      		<div className="Blog">
				<Header />
                <ClassBlog />
				<Footer />
      		</div>
    	);
  	}
}

export default Blog;