import React, { useState, useRef, useEffect } from "react";
import useOmdb from "../../shared/components/hooks/useOmdb";

const MainPage = () => {
    const [isSearching, setIsSearching] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const { search, searchdata, error, isLoading } = useOmdb();

    const searchHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (inputRef.current) {
            search(inputRef.current.value);
        }
    };

    useEffect(() => {
        console.log(searchdata);
    }, [searchdata]);

    return (
        <React.Fragment>
            <main className="main-content p-2 w-full h-full">
                <div className="flex flex-col overflow-auto h-full border-2 border-green-500">
                    <div className="search-bar w-full border flex justify-center">
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
                </div>
            </main>
        </React.Fragment>
    );
};

export default MainPage;
