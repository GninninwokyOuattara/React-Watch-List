import React from "react";

interface props {
    movieData: {
        Title: string;
        Poster: string;
        Year: string;
        imdbID: string;
        Type: string;
    };
}

const MovieItem: React.FC<props> = ({ movieData }) => {
    return (
        <div className="bg-red-100 h-48 w-36 flex">
            <img
                src={movieData.Poster}
                alt={movieData.Title}
                className="h-full w-full"
            />
        </div>
    );
};

export default MovieItem;
