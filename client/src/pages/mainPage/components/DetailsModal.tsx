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
    console.log(props.imdbID);

    const divRef = useRef<HTMLDivElement>(null);
    const imdbDetailsRef = useRef<Details>({});
    const [imdbID, setImdbID] = useState(props.imdbID);

    const { error, isLoading, searchDetails, searchData, setSearchData } =
        useOmdb();

    let data: { [key: string]: movieDataDetails } = JSON.parse(
        localStorage.getItem("movieDetails") as string
    );

    useEffect(() => {
        if (props.show) {
            console.log(imdbID);
            if (!searchData) {
                if (data && data[props.imdbID as any]) {
                    console.log("Set since found");
                    setSearchData(data[props.imdbID]);
                } else {
                    console.log("search");
                    searchDetails(props.imdbID);
                }
            } else {
                console.log(searchData);
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
                                ? props.left - 290
                                : props.left + 146,
                    }}
                    ref={divRef}
                >
                    {isLoading ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <i className="fad fa-spinner-third fa-10x fa-spin"></i>
                        </div>
                    ) : (
                        <h2>
                            {searchData &&
                                (searchData as movieDataDetails).Plot}
                        </h2>
                    )}
                </div>
            )}
        </React.Fragment>
    );
};

export default DetailsModal;
