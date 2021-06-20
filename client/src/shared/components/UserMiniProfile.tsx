import React, { useContext } from "react";
import { authContext, authType } from "../context/authContext";
import { LoginContext, LoginType } from "../context/LoginContext";
import { RegisterContext, registerType } from "../context/RegisterContext";
import LoginForm from "./Login";
import RegisterForm from "./RegisterForm";

const UserMiniProfile = () => {
    const { isLoggedIn } = useContext(authContext) as authType;
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
                <div className="userPic w-10 h-10 border rounded-full"></div>
                <p className="user-name">Idriss Ouattara</p>
            </div>
        );
    } else {
        content = (
            <React.Fragment>
                {showRegister && <RegisterForm onCancel={hideRegisterForm} />}
                {showLogin && <LoginForm onCancel={hideLoginForm} />}
                <div className="mt-auto mb-2 flex flex-col justify-between h-24">
                    <button
                        className="h-10 w-full rounded-md bg-red-300"
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
