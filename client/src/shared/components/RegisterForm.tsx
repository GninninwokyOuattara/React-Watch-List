import React, { useRef, useState, useContext, useReducer } from "react";
import { authContext, userData, authType } from "../context/authContext";
import formReducer from "../reducer/formReducer";
import useRequest from "../components/hooks/useRequest";

let server_url = process.env.REACT_APP_SERVER_DEV as string;

const RegisterForm = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        name: "",
        email: "",
        password: "",
    });
    const auth = useContext(authContext);

    const { error, sendRequest } = useRequest();

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        dispatch({
            type: "INPUT_CHANGE",
            id: event.target.id,
            value: event.target.value,
        });
    };

    const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();

        let response = await sendRequest(
            `${server_url}/users/signup`,
            "POST",
            JSON.stringify(formState)
        );
        if (response) {
            auth?.logHimIn(response.user);
        }
    };

    return (
        <form
            action=""
            className="border h-56 w-96 flex flex-col p-4"
            onSubmit={submitHandler}
        >
            <h1 className="w-full text-center">Login and start Binging </h1>
            <p className="text-red-500 text-center">{error}</p>
            <input
                id="name"
                type="text"
                className="w-full  px-3 h-10 border-b my-2 rounded-md appearance-none outline-none"
                placeholder="Name"
                onChange={changeHandler}
            />
            <input
                id="email"
                type="text"
                className="w-full  px-3 h-10 border-b my-2 rounded-md appearance-none outline-none"
                placeholder="Email"
                onChange={changeHandler}
            />
            <input
                id="password"
                type="password"
                className="w-full px-3 h-10 border-b my-2 rounded-md"
                placeholder="Password"
                onChange={changeHandler}
            />
            <div className="mt-auto flex justify-center">
                <button type="submit" className="h-10 w-24 border rounded-xl">
                    Let's Go
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
