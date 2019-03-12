import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import Gallery from "../pages/Gallery"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import Profile from "../pages/Profile"
import NotMatch from "../pages/NotMatch"
import Cnn from "../pages/Cnn"
import Reuters from "../pages/Reuters"
import Cnbc from "../pages/Cnbc"
import NewYork from "../pages/NewYork"
import Category from "../components/Category"

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/sources/cnn" component={Cnn}/>
            <Route exact path="/sources/reuters" component={Reuters}/>
            <Route exact path="/sources/cnbc" component={Cnbc}/>
            <Route exact path="/sources/the-new-york-times" component={NewYork}/>
            <Route exact path="/sources/:source_name" component={Blog}/>
            <Route component={NotMatch}/>
        </Switch>
    )
}

export default MainRoute;