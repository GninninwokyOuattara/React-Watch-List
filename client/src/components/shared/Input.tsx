import React from "react";

interface props {
    for: string;
    type: string;
}

const Input: React.FC<props> = (props) => {
    return (
        <input
            type={props.type}
            name={props.for}
            id={props.for}
            placeholder={props.for}
            className="w-full h-12 rounded pl-5 mb-3"
        />
    );
};

export default Input;
