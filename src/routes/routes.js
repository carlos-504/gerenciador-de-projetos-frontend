import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../views/Login";
import Home from "../views/Home";
import RegisterProject from "../views/RegisterProject";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route
                    path="/register-project"
                    exact
                    component={RegisterProject}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
