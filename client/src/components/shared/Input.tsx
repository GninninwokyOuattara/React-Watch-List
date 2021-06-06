import React, { useRef, useEffect } from "react";

interface props {
    for: string;
    type: string;
    min?: number;
    inputHandler: (id: string, value: string) => void;
}

const Input: React.FC<props> = (props) => {
    const inputRef = useRef<null | HTMLInputElement>(null);

    const handler: React.ChangeEventHandler<HTMLInputElement> = () => {
        if (inputRef.current) {
            const { id, value } = inputRef.current;
            props.inputHandler(id, value);
        }
    };
    return (
        <input
            ref={inputRef}
            onChange={handler}
            type={props.type}
            name={props.for}
            id={props.for}
            minLength={props.min || 5}
            placeholder={props.for}
            className="w-full h-12 rounded pl-5 mb-3 border border-yellow-400 bg-gray-800 text-white"
        />
    );
};

export default Input;
