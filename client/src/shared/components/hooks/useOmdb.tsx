import React, { useCallback, useState } from "react";

const apiKey = process.env.REACT_APP_OMDB_KEY;

type movieData = {
    Title: string;
    Year: string;
    ImdbId: string;
    Type: string;
    Poster: string;
};

export interface movieDataArray {
    Search: movieData[];
    totalResults: string;
}

interface searchErrorType {
    Response: string;
    Error: string;
}

export interface movieDataDetails {
    Plot: string;
    Runtime: string;
    Genre: string;
}

const useOmdb = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [searchData, setSearchData] = useState<
        movieDataArray | movieDataDetails
    >();

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

    const searchDetails = useCallback(async (s: string, full = false) => {
        setIsLoading(true);
        let res = await fetch(
            `http://www.omdbapi.com/?apiKey=${apiKey}&i=${s}&${
                full && "plot=full"
            }`
        );
        let response: movieDataDetails | searchErrorType;
        response = await res.json();
        if ("Error" in response) {
            setSearchData(undefined);
            setError(response.Error);
        } else {
            setError("");
            setSearchData(response);
            let data: { [key: string]: movieDataDetails } = JSON.parse(
                localStorage.getItem("movieDetails") as string
            );
            data[s] = searchData as movieDataDetails;
            localStorage.setItem("movieDetails", JSON.stringify(data));
        }
        setIsLoading(false);
    }, []);

    return {
        searchData,
        search,
        searchDetails,
        error,
        isLoading,
        setSearchData,
    };
};

export default useOmdb;
