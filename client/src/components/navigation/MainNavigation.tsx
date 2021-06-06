import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import Burger from "./Burger";

import { Auth } from "../../context/AuthContext";

const MainNavigation = () => {
    const auth = useContext(Auth);

    return (
        <div className="w-screen h-14 bg-gray-600 flex justify-between items-center px-8 py-2 mb-1">
            <Burger />
            <div className="logo text-white">WATCHLIST</div>
            <ul className="hidden md:flex list-none flex-row">
                <NavLink to="/" className="mx-3">
                    My Watchlist
                </NavLink>
                {!auth?.isLoggedIn && (
                    <React.Fragment>
                        <NavLink to="/login" className="mx-3">
                            Login
                        </NavLink>
                        <NavLink to="/register" className="mx-3">
                            Register
                        </NavLink>
                    </React.Fragment>
                )}
                {auth?.isLoggedIn && (
                    <NavLink to="/" className="mx-3">
                        Logout
                    </NavLink>
                )}
            </ul>
        </div>
    );
};

export default MainNavigation;
