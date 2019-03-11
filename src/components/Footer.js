import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import logoAlterraPlain from '../logo/logo-alterra-academy-plain@2x.png';
import logoFacebook from '../ico/ico-facebook.png';
import logoTwitter from '../ico/ico-twitter.png';
import logoInstagram from '../ico/ico-instagram.png';

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
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

export default Footer;