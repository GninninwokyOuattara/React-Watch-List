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

    return (
        <React.Fragment>
            {props.show && (
                <div
                    className="w-72 h-48 bg-blue-300 fixed z-40"
                    style={{
                        top: props.top,
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
                                        borderRight: "15px solid red",
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
                                        borderLeft: "15px solid red",
                                        position: "absolute",
                                        right: "-15px",
                                        top: "15px",
                                    }}
                                ></div>
                            )}

                            <h2>
                                {searchData &&
                                    (searchData as movieDataDetails).Plot}
                            </h2>
                        </div>
                    )}
                </div>
            )}
        </React.Fragment>
    );
};

export default DetailsModal;
