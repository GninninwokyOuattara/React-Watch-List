import React, { useEffect, useRef, useState } from "react";
import DetailsModal from "./DetailsModal";
import AuthProvider from "../../../shared/context/authContext";
import LoginProvider from "../../../shared/context/LoginContext";

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
    const itemRef = useRef<HTMLDivElement>(null);
    let topRef = useRef<number>(0);
    let leftRef = useRef<number>(0);
    let relativeMiddle = useRef<number>(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let item: HTMLDivElement;
        let timeoutId: ReturnType<typeof setTimeout>;
        if (itemRef.current) {
            item = itemRef.current;
            item.addEventListener("mouseenter", (e) => {
                clearTimeout(timeoutId);

                if (itemRef.current) {
                    const rect = itemRef.current?.getBoundingClientRect();
                    topRef.current = rect.top;
                    leftRef.current = rect.left;
                }

                setShowModal(true);
            });

            item.addEventListener("mouseleave", (e) => {
                timeoutId = setTimeout(() => {
                    setShowModal(false);
                }, 100);
            });
        }

        let mainMovieContainter = document.querySelector(
            "#root > div > div > main > div > div.grid"
        );
        relativeMiddle.current =
            mainMovieContainter!.getBoundingClientRect().left +
            mainMovieContainter!.getBoundingClientRect().width / 2;

        return () => {
            item.removeEventListener("mouseenter", (e) => {});
            item.removeEventListener("mouseleave", (e) => {});
            clearTimeout(timeoutId);
        };
    }, [itemRef]);

    return (
        <React.Fragment>
            <AuthProvider>
                <LoginProvider>
                    <DetailsModal
                        show={showModal}
                        imdbID={movieData.imdbID}
                        top={topRef.current}
                        left={leftRef.current}
                        relativeMiddle={relativeMiddle.current}
                    />
                </LoginProvider>
            </AuthProvider>

            <div className="bg-red-100 h-48 w-36 flex" ref={itemRef}>
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
