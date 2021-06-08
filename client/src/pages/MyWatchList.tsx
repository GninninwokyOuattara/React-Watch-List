import React, { useEffect, useContext } from "react";

import { Auth } from "../context/AuthContext";

const MyWatchList = () => {
    const auth = useContext(Auth);

    if (!auth) {
        return <h1>Well that empty</h1>;
    }

    return <h1>Hello {auth.userData?.email}</h1>;
};

export default MyWatchList;
