import React from "react";

import { NavLink } from "react-router-dom";
import Burger from "./Burger";

const MainNavigation = () => {
    return (
        <div className="w-screen h-14 bg-gray-600 flex justify-between items-center px-8 py-2">
            <Burger />
            <div className="logo text-white">WATCHLIST</div>
            <ul className="hidden md:flex list-none flex-row">
                <NavLink to="/" className="mx-3">
                    My Watchlist
                </NavLink>
                <NavLink to="/login" className="mx-3">
                    Login
                </NavLink>
            </ul>
        </div>
    );
};

export default MainNavigation;
