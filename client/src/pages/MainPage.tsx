import React from "react";
import Header from "../shared/components/ui/Header";
import Table from "../shared/components/ui/Table";

const MainPage = () => {
    return (
        <React.Fragment>
            <div className="flex  flex-col h-full py-4">
                <Header />

                <div className="flex-grow  h-full bg-black-18">
                    <div className="flex flex-col pt-4 pl-3 h-full">
                        <h1 className="text-white font-bold text-2xl mb-4">
                            Top Rate Movies
                        </h1>
                        <Table />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainPage;
