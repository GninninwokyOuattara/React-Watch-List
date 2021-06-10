import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Layout from "./shared/components/layout/Layout";
import MainPage from "./pages/MainPage";
import Test from "./shared/components/layout/Test";
import Home from "./pages/Home";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/test" exact>
                    <Test />
                </Route>

                <Redirect to="/auth" />
            </Switch>
        </Router>
    );
};

export default App;
