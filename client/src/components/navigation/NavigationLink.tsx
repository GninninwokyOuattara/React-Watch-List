import React from "react";
import { NavLink } from "react-router-dom";

interface props {
    to?: string;
    text: string;
    type?: string;
    action?: () => void;
}

const NavigationLink: React.FC<props> = ({ to, text, type, action }) => {
    if (type == "button") {
        return (
            <button
                onClick={action}
                className="text-gray-300 h-full w-28 font-bold mx-3 hover:text-yellow-300"
            >
                {text}
            </button>
        );
    }
    return (
        <li>
            <NavLink
                to={to || "#"}
                exact
                className="text-gray-500 h-full w-28 flex items-center justify-center font-bold mx-3 hover:text-yellow-300"
                activeClassName="border border-yellow-200 text-yellow-200 rounded-md"
            >
                {text}
            </NavLink>
        </li>
    );
};

export default NavigationLink;
