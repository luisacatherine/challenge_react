import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';

class Contact extends Component {
    render() {
        return (
        <div className="Contact">
            <div className="container-fluid box-contact">
                <div className="row">
                    <div className="col-md-6 d-none d-sm-none d-md-block imgcontact">
                        <img src={ require('../logo/logo-alterra-academy-plain@2x.png') } className="center depan" alt=""/>
                    </div>
                    <div className="col-md-6 col-12 padding75px">
                        <h1 className="Muli28">Contact Us </h1>
                        <span className="Muli12">Send us a message and we will get back to you as soon as possible</span><br/><br/>
                        <label for="username">Name<span className="fontRed">*</span></label><br/>
                        <div className="input-group flex-nowrap w445h52">
                            <div className="input-group-prepend">
                                <span className="input-group-text bgnWhite" id="addon-wrapping"><img src={ require('../ico/ico-user@2x.png') }
                                        className="imgName"/></span>
                            </div>
                            <input type="text" id="username" className="form-control w400h52 fontMuli" placeholder="Username"
                            aria-label="Username" aria-describedby="addon-wrapping" style={{borderLeft: 'white'}}/>
                    </div><br/>
                    <label for="email">Email<span className="fontRed">*</span></label>
                    <div className="input-group flex-nowrap w445h52">
                        <div className="input-group-prepend">
                            <span className="input-group-text bgnWhite" id="addon-wrapping"><img src={require('../ico/ico-email@2x.png')}
                                    className="imgEmail"/></span>
                        </div>
                        <input type="email" id="email" className="form-control w400h52 fontMuli" placeholder="Username.gmail.com"
                            aria-label="Username" aria-describedby="addon-wrapping" style={{borderLeft: 'white'}} required/>
                    </div><br/>
                    <label for="phone">Phone Number<span className="fontRed">*</span></label>
                    <div className="input-group flex-nowrap w445h52">
                        <div className="input-group-prepend">
                            <span className="input-group-text bgnWhite" id="addon-wrapping"><img src={require('../ico/ico-phone@2x.png')}
                                    className="imgPhone"/></span>
                        </div>
                        <input type="text" id="phone" className="form-control w400h52 fontMuli" placeholder="08525893xxx"
                            aria-label="Username" aria-describedby="addon-wrapping" style={{borderLeft: 'white'}} required/>
                    </div><br/>
                    <div className="dropdown">
                            <label for="dropdownMenuButton">National</label><br/>
                            <select className="form-control w445h52 fontMuli" id="dropdownMenuButton" >
                              <option>Indonesian</option>
                              <option>Malaysian</option>
                              <option>Thailand</option>
                              <option>Singapore</option>
                            </select>
                          </div>
                    <div className="dropdown">
                    </div><br/>
                    <span className="fontMuli">Message </span><br/>
                    <textarea name="massage" id="message" className="form-control w445h120"></textarea><br/>
                    <input type="submit" className="form-control w445h52 Muli16" value="Submit" style={{backgroundColor: '#F47522'}}/><br/>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default Contact;
