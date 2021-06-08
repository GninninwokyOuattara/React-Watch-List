import React from "react";
import MainNavigationBar from "../navigation/MainNavigationBar";

interface props {
    children: JSX.Element;
}

const Layout: React.FC<props> = ({ children }) => {
    return (
        <div className="h-screen flex">
            <MainNavigationBar />
            <div className="flex-1 flex overflow-hidden">
                <div className="flex-1 overflow-y-scroll">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
