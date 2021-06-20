import React, { useState } from "react";

const apiKey = process.env.REACT_APP_OMDB_KEY;

type movieData = {
    Title: string;
    Year: string;
    ImdbId: string;
    Type: string;
    Poster: string;
};

interface movieDataArray {
    Search: movieData[];
}

interface searchErrorType {
    Response: string;
    Error: string;
}

const useOmdb = () => {
    console.log(process.env.REACT_APP_OMDB_KEY);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [searchdata, setSearchData] = useState<movieDataArray>();

    const search = async (s: string, page: number = 1) => {
        setIsLoading(true);
        let res = await fetch(
            `https://www.omdbapi.com/?apiKey=${apiKey}&s=${s}&page=${page}`
        );
        let response: movieDataArray | searchErrorType;
        response = await res.json();
        if ("Error" in response) {
            setSearchData(undefined);
            setError(response.Error);
        } else {
            setError("");
            setSearchData(response);
        }

        setIsLoading(false);
    };

    return { searchdata, search, error, isLoading };
};

export default useOmdb;
