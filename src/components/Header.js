import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import logoAlterra from '../logo/logo-alterra-academy@2x.png';

const Header = props => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));

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
                        <li className="nav-item">
                            <Link to='/' style={{ display: is_login ? 'block' : 'none' }} className="nav-link navigation active m-2 menu-item">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className="nav-link navigation nonaktif m-2 menu-item">NEWS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/gallery' className="nav-link navigation nonaktif m-2 menu-item">GALLERY</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link navigation nonaktif m-2 menu-item">CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signup' style={{ display: is_login ? 'none' : 'block' }} className="nav-link navigation nonaktif m-2 menu-item">SIGN UP</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signin' style={{ display: is_login ? 'none' : 'block' }} className="nav-link navigation nonaktif m-2 menu-item">SIGN IN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/profile' style={{ display: is_login ? 'block' : 'none' }} className="nav-link navigation nonaktif m-2 menu-item">PROFILE</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' onClick={()=> props.postSignout()} style={{ display: is_login ? 'block' : 'none' }} className="nav-link navigation nonaktif m-2 menu-item">SIGN OUT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;