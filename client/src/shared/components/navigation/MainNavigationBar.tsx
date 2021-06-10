import React, { useState, useEffect } from "react";
import Logo from "../ui/Logo";
import NavigationItem from "./NavigationItem";
import Links from "./navigationLink";

interface props {
    children: Element[];
}

const MainNavigationBar = () => {
    return (
        <div className="bg-black-14 h-full w-full text-white flex flex-col items-center mr-2">
            <Logo />

            <ul>
                {Links.map((link) => {
                    return (
                        <li>
                            <NavigationItem to={link.to} text={link.link} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MainNavigationBar;
