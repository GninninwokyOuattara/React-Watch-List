import React from "react";

interface props {
    children: string;
}

const Button: React.FC<props> = ({ children }) => {
    return (
        <button className="transition transition-colors duration-500 ease-in-out w-1/2 h-full  hover:text-gray-500">
            {children}
        </button>
    );
};

export default Button;
