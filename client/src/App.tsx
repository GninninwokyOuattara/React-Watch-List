import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/SignUp";
import MainNavigation from "./components/navigation/MainNavigation";
import { Auth } from "./context/AuthContext";

const App = () => {
    const auth = useContext(Auth);

    let router;
    if (auth?.isLoggedIn) {
        router = (
            <Switch>
                <Route path="/" exact>
                    <h1>Index Page</h1>
                </Route>
                <Redirect to="/" />
            </Switch>
        );
    } else {
        router = (
            <Switch>
                <Route path="/" exact>
                    <h1>Index Page</h1>
                </Route>
                <Route path="/login" exact>
                    <LoginPage />
                </Route>
                <Route path="/register" exact>
                    <RegisterPage />
                </Route>
            </Switch>
        );
    }

    return (
        <Router>
            <MainNavigation />
            <main>{router}</main>
        </Router>
    );
};

export default App;
