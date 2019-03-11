import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';

class Biodata extends Component{
    render(){
        return(
            <div className="Biodata">
                <div className="container-fluid">
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
            </div>
        );
    }
}

export default Biodata;