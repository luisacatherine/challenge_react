import React from "react";
import {Redirect} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

const Profile = props => {
    // const is_login = JSON.parse(localStorage.getItem("is_login"));
    // const email = localStorage.getItem("email");
    // const full_name = localStorage.getItem("full_name");
    console.log("is_login", props.is_login);

    if(!props.is_login){
        return (<Redirect to={{pathname: "/signin"}} />);
    } else {
        return (
            <section className="content container box-all">
                <h1 style={{textAlign: "center"}}>Profile</h1>
                <p><label>Email: </label>{props.email}</p>
                <p><label>Full Name: </label>{props.full_name}</p>
            </section>
        );
    }
};

export default connect(["is_login", "email", "full_name"], actions)(Profile);