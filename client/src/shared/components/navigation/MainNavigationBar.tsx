import React from "react";
import Logo from "../Logo";

interface props {
    children: Element[];
}

const MainNavigationBar = () => {
    return (
        <div className="bg-black h-full w-64 text-white">
            <Logo />
        </div>
    );
};

export default MainNavigationBar;
