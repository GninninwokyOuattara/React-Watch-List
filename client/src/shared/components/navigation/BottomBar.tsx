import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationLink } from "./SideBar";

const BottomBar = () => {
    return (
        <div>
            <ul className="sm:hidden flex flex-row border border-blue-400 h-16 items-center justify-around">
                <li className="link">
                    <NavigationLink to="/" title="Home" font="fal fa-home" />
                </li>
                <li className="link">
                    <NavigationLink
                        to="/"
                        title="Explorer"
                        font="fal fa-telescope"
                        mr={2}
                    />
                </li>
                <li className="link">
                    <NavigationLink
                        to="/"
                        title="Watchlist"
                        font="fal fa-film"
                    />
                </li>
                <li className="link">
                    <NavigationLink
                        to="/"
                        title="Reviews"
                        font="fal fa-comment-alt"
                    />
                </li>
                <li className="link">
                    <NavigationLink
                        to="/"
                        title="Profil"
                        font="fal fa-user-alt"
                    />
                </li>
            </ul>
        </div>
    );
};

export default BottomBar;
