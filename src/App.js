import React, { Component } from 'react';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import logoAlterra from './assets/logo/logo-alterra-academy@2x.png';
import logoAlterraPlain from './assets/logo/logo-alterra-academy-plain@2x.png';
import photo from './assets/img/photo.jpeg';
import locationIcon from './assets/ico/ico-location@2x.png';
import logoFacebook from './assets/ico/ico-facebook.png';
import logoTwitter from './assets/ico/ico-twitter.png';
import logoInstagram from './assets/ico/ico-instagram.png';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header">       
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
                            <a href="./index.html" className="nav-link navigation active m-2 menu-item">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a href="./gallery.html" className="nav-link navigation nonaktif m-2 menu-item">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a href="./contact.html" className="nav-link navigation nonaktif m-2 menu-item">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="container-fluid">
            <div className="row bio">
                <div className="col-md-3"></div>
                <div className="col-md-6 col-sm-12">
                    <img id="self-photo" src={photo}/><br/>
                    <h1 id="name">Hian Oliviera</h1>
                    <img id="icon-location" src={locationIcon}/>
                    <p id="location">Malang, East Java, Indonesia</p>
                    <p id="jobs">Frontend Dev, UI/UX and Design</p>
                    <button type="button" className="btn orange-button">Download CV</button>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="info">
                <div className="row">
                    <div className="col-md-6 col-info-1 col-sm-12">
                        <h2 className="head-2">About Me</h2><br/>
                        <p>Hi! I am <b>Hian Oliviera</b>, I work as a <i>Front-end Developer</i> at <span id="alterra-orange">Alterra Group</span>.</p>
                        <p>Front-end Developer are constructive work websites use HTML,CSS, and JavaScript.</p>
                        <p>Front-end Developer are the people who make it design and develop the design until become a website that can run.</p>
                    </div>
                    <div className="col-md-6 col-info-2 col-sm-12">
                        <h2 className="head-2">Information</h2><br/>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Age</th>
                                    <td>: 22th</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>: hian.oliviera@alterra.id</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address</th>
                                    <td>: Jalan Simpang Tambora I No. 9<br/>&nbsp;&nbsp;Karang Besuki, Sukun, Malang 65146</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="row footer">
            <div className="col-md-9 col-info-4 col-sm-12">
                <img id="logo-bawah" src={logoAlterraPlain}/><br/><br/>
                <span id="copy-right">© Copyright Alterra Group 2019</span>
            </div>
            <div className="col-md-3 col-info-3 col-sm-12 table-responsive">
                <table className="medsos-table">
                <tbody>
                    <tr>
                        <td colSpan="2"><span id="follow-us">Follow Us On</span></td>
                    </tr>
                    <tr>
                        <td id="icon-facebook"><img src={logoFacebook}/></td>
                        <td><span className="med-sos">Facebook</span></td>
                    </tr>
                    <tr>
                        <td id="icon-twitter"><img src={logoTwitter}/></td>    
                        <td><span className="med-sos">Twitter</span><br/></td>    
                    </tr>
                    <tr>
                        <td id="icon-instagram"><img src={logoInstagram}/></td>
                        <td><span className="med-sos">Instagram</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
