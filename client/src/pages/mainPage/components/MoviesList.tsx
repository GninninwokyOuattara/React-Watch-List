import React from "react";
import MovieItem from "./MovieItem";
import { props as movieData } from "./MovieItem";

export interface props {
    moviesData: {
        Response: boolean;
        totalResults: string;
        Search: movieData[];
    };
}

const MoviesList: React.FC<props> = ({ moviesData }) => {
    console.log(moviesData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {moviesData.Search.map((movie: any) => {
                return <MovieItem movieData={movie} />;
            })}
        </div>
    );
};

export default MoviesList;
