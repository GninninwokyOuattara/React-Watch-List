import React, { createContext, useState, useEffect, useCallback } from "react";

interface props {
    children: JSX.Element;
}

export interface userData {
    email: string;
    id: string;
    token: string;
    expireIn?: string;
}

export interface authType {
    userData: userData | null;
    isLoggedIn: boolean;
    logHimIn: (data: userData) => void;
    logHimOut: () => void;
}

export const authContext = createContext<authType | null>(null);

const AuthProvider: React.FC<props> = ({ children }) => {
    const [isLoggedIn, setIsloggedIn] = useState<boolean>(false);
    const [userData, setUserData] = useState<userData | null>(null);

    const logHimIn = useCallback((data: userData) => {
        if (data) {
            let expireIn = new Date().getTime() + 3600000;
            data = { ...data, expireIn: expireIn.toString() };
            setUserData(data);
            setIsloggedIn(true);
        }
    }, []);

    const logHimOut = useCallback(() => {
        setIsloggedIn(false);
        setUserData(null);
        localStorage.removeItem("user");
    }, []);

    // Setting user Data
    useEffect(() => {
        if (isLoggedIn && userData) {
            localStorage.setItem("user", JSON.stringify(userData));
        }
    }, [userData, isLoggedIn]);

    // Auto relog
    useEffect(() => {
        let data = localStorage.getItem("user") as string;
        let timerId: any;
        if (data) {
            let userData = JSON.parse(data) as userData;
            let expiration = parseInt(userData.expireIn as string);
            let currentTime = new Date().getTime();

            if (currentTime < expiration) {
                logHimIn(userData);

                let remaining = expiration - currentTime;
                timerId = setTimeout(() => {
                    logHimOut();
                }, remaining);
            }
        } else {
            logHimOut();
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [logHimOut, logHimIn]);

    return (
        <authContext.Provider
            value={{ userData, isLoggedIn, logHimIn, logHimOut }}
        >
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
