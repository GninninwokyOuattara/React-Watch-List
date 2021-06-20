import React, { useState } from "react";
import RegisterForm from "./RegisterForm";

const CreateAccountWarning = () => {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <React.Fragment>
            {showRegister && (
                <RegisterForm onCancel={() => setShowRegister(false)} />
            )}
            <div className="not-login border-2 border-gray-500 w-full h-auto p-1 rounded-md py-2">
                <h2 className="text-center my-1">New on Binge ?</h2>
                <p>Create an account and prepare to Binge</p>
                <button
                    className="bg-red-300 rounded-full w-full mt-2 h-10"
                    onClick={() => setShowRegister(true)}
                >
                    Create an Account
                </button>
            </div>
        </React.Fragment>
    );
};

export default CreateAccountWarning;
