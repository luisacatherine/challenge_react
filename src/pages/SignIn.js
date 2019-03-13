import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import { connect } from "unistore/react";
import { actions } from "../store";

class SignIn extends Component {
    doLogIn = () => {
        this.props.postLogin().then(() => {
            console.log("this", this);
            this.props.history.replace("/profile")
        });
    }
    render(){
        console.log("sign in props", this.props);
        return(
            <section className="content signin container box-all">
                <form onSubmit={e => e.preventDefault()}>
                    <h3>SignIn</h3>
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={e => this.props.setField(e)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => this.props.setField(e)}
                        />
                    </div>
                    <button onClick={() => this.doLogIn()}>SignIn</button>
                    <button type="reset">Reset</button>
                </form>
            </section>
        )
    }
}

export default connect("is_login", actions)(withRouter(SignIn));