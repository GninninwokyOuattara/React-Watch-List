import React from "react";
import InfoBar from "../shared/components/InfoBar";
import BottomBar from "../shared/components/navigation/BottomBar";
import SideBar from "../shared/components/navigation/SideBar";

const MainPage = () => {
    return (
        <React.Fragment>
            <main className="main-content p-2 w-full h-full">
                <div className="flex flex-col overflow-auto h-full border-2 border-green-500">
                    Main Content
                </div>
            </main>
        </React.Fragment>
    );
};

export default MainPage;
