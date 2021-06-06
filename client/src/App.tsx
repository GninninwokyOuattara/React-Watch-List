import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import LoginPage from "./pages/Login";
import MainNavigation from "./components/navigation/MainNavigation";

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <h1>Index Page</h1>
                    </Route>
                    <Route path="/login" exact>
                        <LoginPage />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
};

export default App;
