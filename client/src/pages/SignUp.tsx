import React, { useState, useContext } from "react";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";

import { Auth } from "../context/AuthContext";

const SignUp = () => {
    const auth = useContext(Auth);
    const [formData, setFormData] = useState({});

    const setForm = (id: string, value: string) => {
        let data = { [id]: value };
        setFormData((formData) => {
            return { ...formData, ...data };
        });
    };

    const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();
        const response = await fetch(
            `${process.env.REACT_APP_SERVER_DEV}/users/signup`,
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const { user } = await response.json();
        if (user) {
            auth?.logMeIn(user);
        }
    };

    return (
        <div className="flex justify-center">
            <form
                onSubmit={submitHandler}
                action=""
                className="flex flex-col w-80 h-96 bg-black rounded-md px-3 py-4"
            >
                <Input for={"name"} type="text" inputHandler={setForm} />
                <Input for={"email"} type="email" inputHandler={setForm} />
                <Input
                    for={"password"}
                    type="password"
                    inputHandler={setForm}
                    min={8}
                />
                <Button bottom>Register</Button>
            </form>
        </div>
    );
};

export default SignUp;
