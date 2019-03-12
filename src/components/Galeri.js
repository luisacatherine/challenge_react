import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import iconGallery from '../ico/ico-gallery@2x.png'
import gambar1 from '../img/jake-allison-1322894-unsplash.jpg';
import gambar2 from '../img/jay-lee-1323073-unsplash.jpg';
import gambar3 from '../img/nordwood-themes-1319985-unsplash.jpg';
import gambar4 from '../img/ryan-1321510-unsplash.jpg';
import gambar5 from '../img/nic-yee-1321843-unsplash.jpg';
import gambar6 from '../img/phil-desforges-1322844-unsplash.jpg';

class Galeri extends Component{
    render(){
        return(
            <div className="Galeri">
                <div className="container-fluid box-gallery">
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
            </div>
        );
    }
}

export default Galeri;