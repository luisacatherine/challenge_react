import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import Footer from "../components/Footer";
import ClassBlog from '../components/ClassBlog';
import Category from '../components/Category';

class Blog extends Component {
	render() {
		const is_login = JSON.parse(localStorage.getItem("is_login"));
		return (
			<div className="Blog">
				<div style={{ display: is_login ? 'block' : 'none' }}>
					<Category/>
				</div>
				<ClassBlog />
				<Footer />
			</div>
		)
  	}
}

export default Blog;