import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import Burger from "./Burger";

import { Auth } from "../../context/AuthContext";
import TextLogo from "../shared/TextLogo";
import NavigationLink from "./NavigationLink";

const MainNavigation = () => {
    const auth = useContext(Auth);

    return (
        <div className="w-screen h-14 bg-yellow-600 flex justify-between items-center px-8 py-2 mb-1">
            <Burger />
            <TextLogo text={"Binge"} />
            <ul className="hidden md:flex list-none flex-row h-full ">
                {!auth?.isLoggedIn && (
                    <React.Fragment>
                        <NavigationLink to="/login" text="Login" />

                        <NavigationLink to="/register" text="Register" />
                    </React.Fragment>
                )}
                {auth?.isLoggedIn && (
                    <React.Fragment>
                        <NavigationLink to="/me" text="My Watchlist" />

                        <NavigationLink text="Logout" type="button" />
                    </React.Fragment>
                )}
            </ul>
        </div>
    );
};

export default MainNavigation;
