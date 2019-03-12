import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import photo from '../img/photo.jpeg';
import locationIcon from '../ico/ico-location@2x.png';

class Cover extends Component{
    state = {
        color : 'white'
    }
    changeColor = () => {
        if(this.state.color === 'white'){
            this.setState({
                color: 'red'
            })
        } else {
            this.setState({
                color: 'white'
            })
        }
    }
    render(){
        return(
            <div className="Cover">
            	<div className="container-fluid">
                    <div className="row bio">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 col-sm-12">
                            <img id="self-photo" src={photo}/><br/>
                            <h1 style={{ color: this.state.color }} id="name">Hian Oliviera</h1>
                            <img id="icon-location" src={locationIcon}/>
                            <p id="location">Malang, East Java, Indonesia</p>
                            <p id="jobs">Frontend Dev, UI/UX and Design</p>
                            <button onClick={()=>this.changeColor()} type="button" className="btn orange-button">Download CV</button>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cover;