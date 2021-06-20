import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationLink } from "./SideBar";

const BottomBar = () => {
    return (
        <div>
            <ul className="sm:hidden flex flex-row border border-blue-400 h-16 items-center justify-around">
                <li className="link">
                    <NavLink to="/">
                        <NavigationLink title="Home" font="fal fa-home" />
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/">
                        <NavigationLink
                            title="Explorer"
                            font="fal fa-telescope"
                            mr={2}
                        />
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/">
                        <NavigationLink title="Watchlist" font="fal fa-film" />
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/">
                        <NavigationLink
                            title="Reviews"
                            font="fal fa-comment-alt"
                        />
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/">
                        <NavigationLink title="Profil" font="fal fa-user-alt" />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default BottomBar;
