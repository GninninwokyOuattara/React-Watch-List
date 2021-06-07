import React from "react";
import { NavLink } from "react-router-dom";

interface props {
    text: string;
}

const TextLogo: React.FC<props> = ({ text }) => {
    return (
        <div className="text-blue-900  text-2xl bg-yellow-200 h-full w-24 rounded-md flex items-center justify-center font-bold">
            <NavLink to="/">{text}</NavLink>
        </div>
    );
};

export default TextLogo;
