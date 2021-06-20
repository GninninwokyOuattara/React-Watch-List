import React from "react";
import { NavLink } from "react-router-dom";
import { Route } from "react-router";
import UserMiniProfile from "../UserMiniProfile";
import RegisterProvider from "../../context/RegisterContext";
import LoginProvider from "../../context/LoginContext";

const SideBar = () => {
    return (
        <aside className="hidden sm:flex sidebar sm:w-16 lg:w-64 h-full border border-blue-300 flex-col px-2 ">
            <div className="brand my-10">Binge.it</div>
            <ul className="links">
                <li className="link">
                    <NavigationLink to="/" title="Home" font="fal fa-home" />
                </li>
                <li className="link">
                    <NavigationLink
                        to="/explorer"
                        title="Explorer"
                        font="fa-telescope"
                        mr={2}
                    />
                </li>
                <li className="link">
                    <NavigationLink
                        to="/watchlist"
                        title="Watchlist"
                        font="fa-film"
                    />
                </li>
                <li className="link">
                    <NavigationLink
                        to="/reviews"
                        title="Reviews"
                        font="fa-comment-alt"
                    />
                </li>
                <li className="link">
                    <NavigationLink
                        to="/profil"
                        title="Profil"
                        font="fa-user-alt"
                    />
                </li>
            </ul>
            <RegisterProvider>
                <LoginProvider>
                    <UserMiniProfile />
                </LoginProvider>
            </RegisterProvider>
        </aside>
    );
};

interface NaviLink {
    to: string;
    title: string;
    font?: string;
    mr?: number;
}

export const NavigationLink: React.FC<NaviLink> = ({ title, font, mr, to }) => {
    return (
        <NavLink to={to}>
            <Route
                path={to}
                children={({ match }) => {
                    return (
                        <div className="flex items-center my-4 h-12 rounded-md pl-1 hover:bg-red-200">
                            {font && (
                                <FontIcon
                                    font={font}
                                    mr={mr}
                                    match={match?.isExact || false}
                                />
                            )}

                            <div className="link-title hidden lg:block">
                                {title}
                            </div>
                        </div>
                    );
                }}
            />
        </NavLink>
    );
};

interface Font {
    font: string;
    mr?: number;
    match: boolean;
}

export const FontIcon: React.FC<Font> = ({ font, mr, match }) => {
    return (
        <i
            className={`${match ? "fas" : "fal"} ${font} mr-${mr || 3} fa-2x`}
        ></i>
    );
};

export default SideBar;
