import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <aside className="sidebar w-64 h-full border border-blue-300 flex flex-col px-4">
            <div className="brand my-10">Binge.it</div>
            <ul className="links">
                <li className="link">
                    <NavLink to="/">Explorer</NavLink>
                </li>
                <li className="link">
                    <NavLink to="/">Watchlist</NavLink>
                </li>
                <li className="link">
                    <NavLink to="/">Reviews</NavLink>
                </li>
                <li className="link">
                    <NavLink to="/">Profil</NavLink>
                </li>
            </ul>
            <div className="user mt-auto">Coming soon</div>
        </aside>
    );
};

export default SideBar;
