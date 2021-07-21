import React, { useEffect, useState, useRef } from "react";
import useOmdb, {
    movieDataDetails,
} from "../../../shared/components/hooks/useOmdb";

interface props {
    show: boolean;
    imdbID: string;
    top: number;
    left: number;
    relativeMiddle: number;
}

interface Details {
    [key: string]: movieDataDetails;
}

const DetailsModal: React.FC<props> = (props) => {
    const divRef = useRef<HTMLDivElement>(null);
    const imdbDetailsRef = useRef<Details>({});
    const [imdbID, setImdbID] = useState(props.imdbID);
    const [isHovered, setIsHovered] = useState(false);

    const { error, isLoading, searchDetails, searchData, setSearchData } =
        useOmdb();

    let data: { [key: string]: movieDataDetails } = JSON.parse(
        localStorage.getItem("movieDetails") as string
    );

    if (!data) {
        localStorage.setItem(
            "movieDetails",
            JSON.stringify(imdbDetailsRef.current)
        );
    }

    useEffect(() => {
        if (props.show) {
            if (!searchData) {
                if (data && data[props.imdbID as any]) {
                    setSearchData(data[props.imdbID]);
                } else {
                    searchDetails(props.imdbID);
                }
            } else {
            }
        }
    });

    useEffect(() => {
        if (divRef.current) {
            divRef.current.addEventListener("mouseenter", (e) => {
                setIsHovered(true);
            });
            divRef.current.addEventListener("mouseleave", (e) => {
                setIsHovered(false);
            });
        }

        return () => {
            if (divRef.current) {
                divRef.current.removeEventListener("mouseenter", (e) => {});
                divRef.current.removeEventListener("mousleave", (e) => {});
            }
        };
    }, [props.show]);

    console.log(props.top, divRef.current?.getBoundingClientRect().top);

    return (
        <React.Fragment>
            {(props.show || isHovered) && (
                <div
                    className="w-72 min-h-48 bg-red-100 fixed z-40 rounded-md"
                    style={{
                        top: props.top >= 0 ? props.top : 0,
                        left:
                            props.relativeMiddle - props.left < 0
                                ? props.left - 305
                                : props.left + 165,
                    }}
                    ref={divRef}
                >
                    {isLoading ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <i className="fad fa-spinner-third fa-10x fa-spin"></i>
                        </div>
                    ) : (
                        <div className="flex p-3 relative">
                            {props.relativeMiddle - props.left > 0 ? (
                                <div
                                    className="arrow-left absolute bottom-0"
                                    style={{
                                        width: 0,
                                        height: 0,
                                        borderTop: "15px solid transparent",
                                        borderBottom: "15px solid transparent",
                                        borderRight: "15px solid #fee2e2",
                                        position: "absolute",
                                        left: "-15px",
                                        top: "15px",
                                    }}
                                ></div>
                            ) : (
                                <div
                                    className="arrow-right absolute bottom-0"
                                    style={{
                                        width: 0,
                                        height: 0,
                                        borderTop: "15px solid transparent",
                                        borderBottom: "15px solid transparent",
                                        borderLeft: "15px solid #fee2e2",
                                        position: "absolute",
                                        right: "-15px",
                                        top: "15px",
                                    }}
                                ></div>
                            )}
                            <div className="flex flex-col h-full">
                                <h2>
                                    {searchData &&
                                        (searchData as movieDataDetails).Plot}
                                </h2>
                                <div className="buttons-group flex mt-1 justify-around w-full h-8  text-white font-bold">
                                    <button className="border w-28 bg-red-400 rounded-md">
                                        Learn More
                                    </button>
                                    <button className="border w-32 bg-red-400 rounded-md">
                                        Add to Watchlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </React.Fragment>
    );
};

export default DetailsModal;
