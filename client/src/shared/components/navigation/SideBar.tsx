import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
    return (
        <aside className="hidden md:flex sidebar md:w-16 lg:w-64 h-full border border-blue-300 flex-col px-2">
            <div className="brand my-10">Binge.it</div>
            <ul className="links">
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
            </ul>
            <div className="user mt-auto">Coming soon</div>
        </aside>
    );
};

interface NaviLink {
    title: string;
    font?: string;
    mr?: number;
}

export const NavigationLink: React.FC<NaviLink> = ({ title, font, mr }) => {
    return (
        <div className="flex items-center my-4 h-12 rounded-md pl-1 hover:bg-red-200">
            {font && <FontIcon font={font} mr={mr} />}

            <div className="link-title hidden lg:block">{title}</div>
        </div>
    );
};

interface Font {
    font: string;
    mr?: number;
}

export const FontIcon: React.FC<Font> = ({ font, mr }) => {
    return <i className={`${font} mr-${mr || 3} fa-2x`}></i>;
};

export default SideBar;
