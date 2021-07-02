import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface props {
    onChange?: () => void;
    colSpan?: number;
}

const SearchBar: React.FC<props> = (props) => {
    return (
        <div
            className={`search-bar border-0 flex-grow h-10 bg-darkish  pl-5 pr-3 rounded flex flex-row items-center ${
                props.colSpan ? `col-span-${props.colSpan}` : "w-64"
            }`}
        >
            <input
                type="text"
                name="search"
                id="search"
                className="h-full w-full outline-none bg-transparent text-gray-500 font-bold"
                placeholder="Search for a movie, tv show..."
            />
            <FontAwesomeIcon
                icon={faSearch}
                size="xs"
                className="text-white ml-2"
            />
        </div>
    );
};

export default SearchBar;
