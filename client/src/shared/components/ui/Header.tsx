import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-12 gap-4 mb-4">
                <SearchBar colSpan={9} />
                <div className="text-gray-500 font-bold ml-4 min-w-full flex flex-row items-center col-span-2">
                    My Watchlist
                    <div className="inline-block ml-2 border border-gray-500 w-6 h-6 flex items-center justify-center">
                        0
                    </div>
                </div>
                <div className="profile col-span-1 bg-gray-500  w-10 h-10 rounded-full ml-3"></div>
            </div>
        </React.Fragment>
    );
};

export default Header;
