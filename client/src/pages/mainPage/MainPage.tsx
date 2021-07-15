import React, { useState, useRef, useEffect } from "react";
import useOmdb from "../../shared/components/hooks/useOmdb";
import MoviesList from "./components/MoviesList";

const MainPage = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [previousResults, setPreviousResults] = useState<any>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const { search, searchData, error, isLoading } = useOmdb();

    const searchHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (inputRef.current) {
            search(inputRef.current.value);
        }
    };

    const getPreviousSearchResults = () => {
        const pre = localStorage.getItem("searchResults");
        if (pre) {
            const data = JSON.parse(pre);
            setPreviousResults(data);
        }
    };

    useEffect(() => {
        if (searchData) {
            localStorage.setItem("searchResults", JSON.stringify(searchData));
        }
    }, [searchData]);

    useEffect(() => {
        console.log("Looking for previous");
        getPreviousSearchResults();
        console.log(previousResults);
    }, []);

    let content: any;
    if (searchData) {
        content = searchData;
    } else if (previousResults) {
        content = previousResults;
    } else {
        content = null;
    }

    return (
        <React.Fragment>
            <main className="main-content p-2 w-full h-full">
                <div className="flex flex-col overflow-auto h-full border-2 border-green-500">
                    <div className="search-bar w-full border flex justify-center mb-4">
                        <form
                            className="bg-gray-100 w-9/12 h-10 rounded-md"
                            onSubmit={searchHandler}
                        >
                            <input
                                type="text"
                                className="w-11/12 h-full bg-transparent outline-none px-4"
                                ref={inputRef}
                            />
                            <i className=" fas fa-search"></i>
                        </form>
                    </div>
                    {/* {searchData && (
                        <MoviesList
                            moviesData={searchData as any}
                        />
                    )} */}
                    {content && <MoviesList moviesData={content as any} />}
                </div>
            </main>
        </React.Fragment>
    );
};

export default MainPage;
