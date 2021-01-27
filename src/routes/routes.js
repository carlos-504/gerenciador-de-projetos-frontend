import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Home from "../views/Home";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
