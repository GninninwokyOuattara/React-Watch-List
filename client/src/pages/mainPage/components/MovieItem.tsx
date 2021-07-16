import React, { useEffect, useRef, useState } from "react";
import DetailsModal from "./DetailsModal";

export interface props {
    movieData: {
        Title: string;
        Poster: string;
        Year: string;
        imdbID: string;
        Type: string;
    };
}

const MovieItem: React.FC<props> = ({ movieData }) => {
    const itemRef = useRef<HTMLInputElement>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (itemRef.current) {
            const rect = itemRef.current?.getBoundingClientRect();
            console.log(rect.top, rect.left);
        }
    }, []);

    return (
        // <ModalHover></ModalHover>
        <React.Fragment>
            <DetailsModal show={showModal} />
            <div
                className="bg-red-100 h-48 w-36 flex"
                ref={itemRef}
                onMouseEnter={() => setShowModal(true)}
                onMouseLeave={() => setShowModal(false)}
            >
                <img
                    src={movieData.Poster}
                    alt={movieData.Title}
                    className="h-full w-full"
                />
            </div>
        </React.Fragment>
    );
};

export default MovieItem;
