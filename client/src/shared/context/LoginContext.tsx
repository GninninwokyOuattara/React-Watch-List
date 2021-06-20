import { createContext, useState } from "react";

export interface LoginType {
    showLoginForm: () => void;
    hideLoginForm: () => void;
    showLogin: boolean;
}

export const LoginContext = createContext<LoginType | null>(null);

interface props {
    children: JSX.Element;
}

const LoginProvider: React.FC<props> = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false);

    const showLoginForm = () => {
        setShowLogin(true);
    };
    const hideLoginForm = () => {
        setShowLogin(false);
    };

    return (
        <LoginContext.Provider
            value={{ showLogin, showLoginForm, hideLoginForm }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
