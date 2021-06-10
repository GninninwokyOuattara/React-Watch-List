import React from "react";
import MainNavigationBar from "../navigation/MainNavigationBar";

interface props {
    children: JSX.Element;
}

const Layout: React.FC<props> = ({ children }) => {
    return (
        // <React.Fragment>
        //     <div className="h-screen flex flex-row w-screen">
        //         <div className="w-2/12 h-full">
        //             <MainNavigationBar />
        //         </div>
        //         <div className="flex-1 flex overflow-hidden">
        //             <div className="flex-1 overflow-y-scroll">{children}</div>
        //         </div>
        //     </div>
        // </React.Fragment>
        <div className="w-full h-full">
            <div className="flex h-full">
                <div className="w-64">
                    <MainNavigationBar />
                </div>
                <div className="flex-grow bg-black-14">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
