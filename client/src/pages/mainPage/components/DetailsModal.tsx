import React, { useState } from "react";

interface props {
    show: boolean;
}

const DetailsModal: React.FC<props> = (props) => {
    return (
        <React.Fragment>
            {props.show && (
                <div className="w-72 h-48 bg-blue-300 fixed z-40">
                    Hello I'm Modal
                </div>
            )}
        </React.Fragment>
    );
};

export default DetailsModal;
