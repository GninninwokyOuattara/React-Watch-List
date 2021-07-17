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
// spinner

{
    /* <div className="w-full h-full flex items-center justify-center">
    <i className="fad fa-spinner-third fa-10x animate-spin"></i>
</div>; */
}

const DetailsModal: React.FC<props> = (props) => {
    console.log(props.imdbID);

    const divRef = useRef<HTMLDivElement>(null);
    const [imdbID, setImdbID] = useState(props.imdbID);

    const { error, isLoading, searchDetails, searchData, setSearchData } =
        useOmdb();

    let imdbDetails: Details;
    let data = localStorage.getItem("movieDetails");
    if (data) {
        imdbDetails = JSON.parse(data);
    } else {
        localStorage.setItem("movieDetails", JSON.stringify({}));
        imdbDetails = {};
    }

    // useEffect(() => {
    //     console.log(imdbID);
    //     if (imdbDetails && imdbDetails[props.imdbID as any]) {
    //         console.log("Set since found");
    //         setSearchData(imdbDetails[props.imdbID as any]);
    //     } else {
    //         console.log("search");
    //         searchDetails(props.imdbID);
    //         imdbDetails[props.imdbID] = searchData as movieDataDetails;
    //         console.log(imdbDetails);
    //         localStorage.removeItem("movieDetails");
    //         localStorage.setItem("movieDetails", JSON.stringify(imdbDetails));
    //     }

    //     // let data = localStorage.getItem("movieDetails");
    //     // if (data) {
    //     //     data = JSON.parse(data);

    //     //     if (data !== null && data[props.imdbID as any]) {
    //     //         console.log(data);
    //     //     } else {
    //     //         searchDetails(props.imdbID);
    //     //     }
    //     // }
    // }, [imdbID]);

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
                    <div className="w-full h-full flex items-center justify-center">
                        <i className="fad fa-spinner-third fa-10x fa-spin"></i>
                    </div>
                    {/* {isLoading ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <i className="fad fa-spinner-third fa-10x animate-spin"></i>
                        </div>
                    ) : (
                        <h2>{(searchData as movieDataDetails).Plot}</h2>
                    )} */}
                </div>
            )}
        </React.Fragment>
    );
};

export default DetailsModal;
