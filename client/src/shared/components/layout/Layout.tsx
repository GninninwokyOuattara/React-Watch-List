import React from "react";
import InfoBar from "../InfoBar";
import BottomBar from "../navigation/BottomBar";
import SideBar from "../navigation/SideBar";

interface props {
    children: JSX.Element;
}

const Layout: React.FC<props> = ({ children }) => {
    return (
        <div className="h-full">
            <div className="border-2 border-red-300 h-full sm:h-screen sm:flex-row flex flex-col ">
                <SideBar />
                {children}
                <InfoBar />

                <BottomBar />
            </div>
        </div>
    );
};

export default Layout;
