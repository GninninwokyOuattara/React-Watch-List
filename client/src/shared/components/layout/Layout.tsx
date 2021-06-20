import React from "react";
import BottomBar from "../navigation/BottomBar";
import SideBar from "../navigation/SideBar";

interface props {
    children: JSX.Element;
}

const Layout: React.FC<props> = ({ children }) => {
    return (
        <div className="h-screen">
            <div className="border-2 border-red-300 h-full sm:h-screen sm:flex-row flex flex-col ">
                <SideBar />
                {children}
                <BottomBar />
            </div>
        </div>
    );
};

export default Layout;
