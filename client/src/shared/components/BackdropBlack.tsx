import React from "react";
import { createPortal } from "react-dom";

interface props {
    children: JSX.Element;
    onCancel?: () => void;
}

const BackdropBlack: React.FC<props> = ({ children, onCancel }) => {
    const backdrop = (
        <React.Fragment>
            <div
                className="fixed  w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-20 flex"
                onClick={onCancel}
            >
                {children}
            </div>
        </React.Fragment>
    );

    return createPortal(
        backdrop,
        document.getElementById("backdrop") as Element
    );
};

export default BackdropBlack;
