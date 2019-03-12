import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import logoAlterra from '../logo/logo-alterra-academy@2x.png';

const Header = props => {
    return(
        <div className="header-new">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex flex-grow-1">
                    <span className="w-100 d-lg-none d-block"></span>
                    <a className="navbar-brand d-none d-lg-inline-block" href="#">
                        <img id="logo-atas" src={logoAlterra}/>
                    </a>
                    <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
                        <img id="logo-atas" src={logoAlterra}/>
                    </a>
                    <div className="w-100 text-right">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                    <ul className="navbar-nav ml-auto flex-nowrap">
                        <li className="nav-item nav-link navigation active m-2 menu-item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="nav-item nav-link navigation nonaktif m-2 menu-item">
                            <Link to='/signup'>SignUp</Link>
                        </li>
                        <li className="nav-item nav-link navigation nonaktif m-2 menu-item">
                            <Link to='/signin'>SignIn</Link>
                        </li>
                        <li className="nav-item nav-link navigation nonaktif m-2 menu-item">
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li className="nav-item nav-link navigation nonaktif m-2 menu-item">
                            <Link to='/gallery'>Gallery</Link>
                        </li>
                        <li className="nav-item nav-link navigation nonaktif m-2 menu-item">
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' onClick={()=> props.postSignout()}>SignOut</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;