import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import logoAlterra from './assets/logo/logo-alterra-academy@2x.png';
import logoAlterraPlain from './assets/logo/logo-alterra-academy-plain@2x.png';
import iconGallery from './assets/ico/ico-gallery@2x.png'
import gambar1 from './assets/img/exp-gallery/jake-allison-1322894-unsplash.jpg';
import gambar2 from './assets/img/exp-gallery/jay-lee-1323073-unsplash.jpg';
import gambar3 from './assets/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg';
import gambar4 from './assets/img/exp-gallery/ryan-1321510-unsplash.jpg';
import gambar5 from './assets/img/exp-gallery/nic-yee-1321843-unsplash.jpg';
import gambar6 from './assets/img/exp-gallery/phil-desforges-1322844-unsplash.jpg';
import logoFacebook from './assets/ico/ico-facebook.png';
import logoTwitter from './assets/ico/ico-twitter.png';
import logoInstagram from './assets/ico/ico-instagram.png';

class App extends Component {
  render() {
    return (
      <div className="Gallery">
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
                            <a href="./index.html" className="nav-link navigation nonaktif m-2 menu-item">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a href="./gallery.html" className="nav-link navigation active m-2 menu-item">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a href="./contact.html" className="nav-link navigation nonaktif m-2 menu-item">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="container-fluid">
            <div className="judul-gallery">
                <img id="icon-gallery" src={iconGallery}/>
                <span>&nbsp;&nbsp;GALLERY</span>
            </div>
            <div className="gallery-gambar-total">
                <div className="card-deck">
                    <div className="card-body text-center">
                        <img className="gambar" src={gambar1}/>
                    </div>
                    <div className="card-body text-center">
                        <img className="gambar" src={gambar2}/>
                    </div>
                    <div className="card-body text-center">
                        <img className="gambar" src={gambar3}/>
                    </div>
                </div>
                <div className="card-deck bawah">
                    <div className="card-body text-center">
                        <img className="gambar" src={gambar4}/>
                    </div>
                    <div className="card-body text-center">
                        <img className="gambar" src={gambar5}/>
                    </div>
                    <div className="card-body text-center">
                        <img className="gambar" src={gambar6}/>
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
