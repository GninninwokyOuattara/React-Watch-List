import React, { useContext } from "react";
import { authContext, authType } from "../context/authContext";
import { LoginContext, LoginType } from "../context/LoginContext";
import { RegisterContext, registerType } from "../context/RegisterContext";
import LoginForm from "./Login";
import RegisterForm from "./RegisterForm";

const UserMiniProfile = () => {
    const { isLoggedIn, userData } = useContext(authContext) as authType;
    const { showRegister, hideRegisterForm, showRegisterForm } = useContext(
        RegisterContext
    ) as registerType;
    const { hideLoginForm, showLogin, showLoginForm } = useContext(
        LoginContext
    ) as LoginType;

    let content: JSX.Element;

    if (isLoggedIn) {
        content = (
            <div className="user mt-auto border-gray-500 h-20 flex  flex-col items-center">
                <img
                    className="userPic w-10 h-10 border rounded-full"
                    src={userData?.image}
                    alt={userData?.name}
                />
                <p className="user-name">{userData?.name}</p>
            </div>
        );
    } else {
        content = (
            <React.Fragment>
                {showRegister && <RegisterForm onCancel={hideRegisterForm} />}
                {showLogin && <LoginForm onCancel={hideLoginForm} />}
                <div className="hidden lg:flex mt-auto mb-2 flex-col h-24">
                    <button
                        className="h-10 w-full rounded-md bg-red-300 mb-4"
                        onClick={showLoginForm}
                    >
                        Login
                    </button>
                    <button
                        className="h-10 w-full rounded-md bg-red-300"
                        onClick={showRegisterForm}
                    >
                        Register
                    </button>
                </div>
            </React.Fragment>
        );
    }

    return content;
};

export default UserMiniProfile;
