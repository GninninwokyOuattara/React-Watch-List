import React from "react";

interface props {
    children: string;
    bottom?: boolean;
}
const Button: React.FC<props> = (props) => {
    return (
        <button
            type="submit"
            className="bg-yellow-400 w-full h-10 mt-auto text-white rounded-md font-mono text-xl"
        >
            {props.children}
        </button>
    );
};

export default Button;
