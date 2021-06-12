import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

import { authContext, authType } from "../../context/authContext";
import { react } from "@babel/types";
import { url } from "inspector";

const NavigationBar = () => {
    const { isLoggedIn, userData } = useContext(authContext) as authType;

    return (
        <header
            className="w-screen h-16 border flex md:justify-between items-center px-4 mb-2"
            id="header"
        >
            <button className="burger md:hidden h-full w-16 flex flex-col items-center justify-center hover:text-gray-500">
                <span className="bg-black w-10 h-0.5 my-0.5"></span>
                <span className="bg-black w-10 h-0.5 my-0.5"></span>
                <span className="bg-black w-10 h-0.5 my-0.5"></span>
            </button>
            <Link to="/" className="brand flex-grow text-center md:text-left">
                Binge.it
            </Link>
            {!isLoggedIn && (
                <div className="hidden md:flex links justify-between md:w-48 h-full">
                    <React.Fragment>
                        <Button>Login</Button>
                        <Button>Register</Button>
                    </React.Fragment>
                </div>
            )}
            {isLoggedIn && (
                <div className="hidden md:flex items-center justify-center h-full ml-auto">
                    <img
                        className="border border-gray-500 w-14 h-14 rounded-full cursor-pointer"
                        src={userData?.image}
                        alt=""
                    />
                    {/* <button
                        className="w-14 h-14 border border-gray-400 rounded-full object-fill"
                        style={{
                            backgroundImage: `url(${"https://lh3.googleusercontent.com/a-/AOh14Gh-4g9AVCtFdCupyYsLJE0zo2ecLIfyyRm8YVmfJg=k-s32"})`,
                        }}
                    ></button> */}
                </div>
            )}
        </header>
    );
};

export default NavigationBar;
