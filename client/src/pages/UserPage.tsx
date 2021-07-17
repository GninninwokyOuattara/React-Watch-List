import React, { useContext, useEffect, useState } from "react";
import useOmdb, { movieDataArray } from "../shared/components/hooks/useOmdb";

import { authContext, authType } from "../shared/context/authContext";

const UserPage: React.FC = () => {
    const auth = useContext(authContext) as authType;
    const [data, setData] = useState<any>();
    const [input, setInput] = useState("");

    const inputRef = React.useRef<HTMLInputElement>(null);

    const { search, searchData, error, isLoading } = useOmdb();

    const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (inputRef.current) {
            let value = inputRef.current.value;
            search(value);
        }
    };

    return (
        <React.Fragment>
            <form action="" onSubmit={submit} className="border mt-4">
                <input type="text" ref={inputRef} />
            </form>
            {data && <div>Word</div>}
            <div className="overflow-y-auto border-4 border-black h-full">
                {searchData &&
                    (searchData as movieDataArray).Search.map((movie) => {
                        return <img src={`${movie.Poster}`} alt="" />;
                    })}
            </div>
        </React.Fragment>
    );
};

export default UserPage;
