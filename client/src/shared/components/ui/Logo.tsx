import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/">
            <div className="w-full h-12 flex items-center justify-center my-2">
                <div className="text-blue-500 bg-yellow-300 w-20 h-10 flex items-center justify-center text-2xl font-bold rounded-md">
                    Binge
                </div>
            </div>
        </NavLink>
    );
};

export default Logo;
