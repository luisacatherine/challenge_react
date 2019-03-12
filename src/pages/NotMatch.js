import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';

class NotMatch extends Component{
    render(){
        return(
            <div className="NotMatch">
            	<div className="container">
                    <div className="box-all">
                        <h1>Pages not found</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotMatch;