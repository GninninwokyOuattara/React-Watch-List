import React, { createContext, useState, useCallback } from "react";

interface AuthContextData {
    isLoggedIn: boolean;
    logMeIn: (data: userData) => void;
    logMeOut: () => void;
}
const Auth = createContext<null | AuthContextData>(null);

interface props {
    children: JSX.Element;
}

interface userData {
    _id: "string";
    email: "string";
    token: "string";
}

const AuthProvider: React.FC<props> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userToken, setUserToken] = useState("");

    const logMeIn = useCallback((data: userData) => {
        setUserToken(data.token);
        setIsLoggedIn(true);
    }, []);

    const logMeOut = useCallback(() => {
        setUserToken("");
        setIsLoggedIn(false);
    }, []);

    return (
        <Auth.Provider
            value={{ isLoggedIn, logMeIn, logMeOut }}
        ></Auth.Provider>
    );
};

export default AuthProvider;