import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import LoginForm from "../Login";
import RegisterForm from "../RegisterForm";

import { authContext, authType } from "../../context/authContext";

const NavigationBar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const { isLoggedIn, userData } = useContext(authContext) as authType;

    return (
        <React.Fragment>
            {showLogin && <LoginForm onCancel={() => setShowLogin(false)} />}
            {showRegister && (
                <RegisterForm onCancel={() => setShowRegister(false)} />
            )}
            <header
                className="w-screen h-16 border flex md:justify-between items-center px-4 mb-2"
                id="header"
            >
                <button className="burger md:hidden h-full w-16 flex flex-col items-center justify-center hover:text-gray-500">
                    <span className="bg-black w-10 h-0.5 my-0.5"></span>
                    <span className="bg-black w-10 h-0.5 my-0.5"></span>
                    <span className="bg-black w-10 h-0.5 my-0.5"></span>
                </button>
                <Link
                    to="/"
                    className="brand flex-grow text-center md:text-left"
                >
                    Binge.it
                </Link>
                {!isLoggedIn && (
                    <div className="hidden md:flex links justify-between md:w-48 h-full">
                        <React.Fragment>
                            <Button onClick={() => setShowLogin(true)}>
                                Login
                            </Button>
                            <Button onClick={() => setShowRegister(true)}>
                                Register
                            </Button>
                        </React.Fragment>
                    </div>
                )}
                {isLoggedIn && (
                    <Link to="/me">
                        <div className="hidden md:flex items-center justify-center h-full ml-auto">
                            <img
                                className="border border-gray-500 w-14 h-14 rounded-full cursor-pointer"
                                src={userData?.image}
                                alt=""
                            />
                        </div>
                    </Link>
                )}
            </header>
        </React.Fragment>
    );
};

export default NavigationBar;
