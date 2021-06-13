import React from "react";

interface props {
    children: string;
    onClick: () => void;
}

const Button: React.FC<props> = ({ children, onClick }) => {
    return (
        <button
            className="transition transition-colors duration-500 ease-in-out w-1/2 h-full  hover:text-gray-500"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
