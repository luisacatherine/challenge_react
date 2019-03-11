import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import TopNews from '../components/TopNews';
import Berita from '../components/Berita';
import Berita2 from '../components/Berita2';
import Berita3 from '../components/Berita3';
import Search from '../components/Search'

class ClassBlog extends Component{
    render(){
        return(
            <div className="ClassBlog">
            	<div className="container container-blog">
                    <div className="row">
                        <div className="col-md-4 col-blog">
                            <div className="nav-left">
                                <TopNews />
                                <Search />
                            </div>
                        </div>
                        <div className="col-md-8 col-blog">
                            <Berita />
                            <Berita2 />
                            <Berita3 />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassBlog;