import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../shared/components/Login";
import NavigationBar from "../shared/components/navigation/NavigationBar";

const Home = () => {
    return (
        <React.Fragment>
            <NavigationBar />
            <LoginForm />
        </React.Fragment>
    );
};

export default Home;
