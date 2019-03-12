import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';

class Category extends Component {

    render() {
        return (
            <div className="box-contact">
                <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" value="cnn">
                                <Link to='/sources/cnn' className="nav-link navigation nonaktif m-2 menu-item">CNN</Link>
                            </li>
                            <li class="nav-item" value="reuters">
                                <Link to='/sources/reuters' className="nav-link navigation nonaktif m-2 menu-item">Reuters</Link>
                            </li>
                            <li class="nav-item" value="cnbc">
                                <Link to='/sources/cnbc' className="nav-link navigation nonaktif m-2 menu-item">CNBC</Link>
                            </li>
                            <li class="nav-item" value="the-new-york-times">
                                <Link to='/sources/the-new-york-times' className="nav-link navigation nonaktif m-2 menu-item">The New York Times</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Category;