import React, { useContext } from "react";
import { authContext, authType } from "../context/authContext";
import CreateAccountWarning from "./CreateAccountWarning";

const InfoBar = () => {
    const { isLoggedIn } = useContext(authContext) as authType;
    return (
        <aside className="aside aside-right w-96  hidden md:flex md:flex-col pr-2 pt-2">
            {!isLoggedIn && <CreateAccountWarning />}
        </aside>
    );
};

export default InfoBar;
