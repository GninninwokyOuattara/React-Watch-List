import { createContext, useState } from "react";

export interface registerType {
    showRegisterForm: () => void;
    hideRegisterForm: () => void;
    showRegister: boolean;
}

export const RegisterContext = createContext<registerType | null>(null);

interface props {
    children: JSX.Element;
}

const RegisterProvider: React.FC<props> = ({ children }) => {
    const [showRegister, setShowRegister] = useState(false);

    const showRegisterForm = () => {
        setShowRegister(true);
    };
    const hideRegisterForm = () => {
        setShowRegister(false);
    };

    return (
        <RegisterContext.Provider
            value={{ showRegister, showRegisterForm, hideRegisterForm }}
        >
            {children}
        </RegisterContext.Provider>
    );
};

export default RegisterProvider;
