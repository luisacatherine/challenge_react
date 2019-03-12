import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../pages/Home"
// import SignIn from "../pages/SignIn"
import Gallery from "../pages/Gallery"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
// import Gallery from "../pages/Gallery"

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/signin" component={SignIn} /> */}
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={Gallery}/>
        </Switch>
    )
}

export default MainRoute;