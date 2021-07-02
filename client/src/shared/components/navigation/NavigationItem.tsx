import React from "react";
import { NavLink } from "react-router-dom";

interface props {
    text: string;
    to: string;
}

const NavigationItem: React.FC<props> = (props) => {
    console.log(props);
    return (
        <div className="text-gray-500 font-bold text-lg my-4">
            <NavLink to={props.to} activeClassName="text-white text-xl">
                {props.text}
            </NavLink>
        </div>
    );
};

export default NavigationItem;
