import React, { useRef, useState } from "react";

let server_url = process.env.REACT_APP_SERVER_DEV as string;

const LoginForm = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [formData, setFormData] = useState({});

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        let value = event.target.value;
        setFormData((prev) => {
            return { ...prev, [event.target.id]: value };
        });
    };

    const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();
        console.log(formData);
        let res = await fetch(`${server_url}/users/login`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.ok) {
            res = await res.json();
        }
    };

    return (
        <form
            action=""
            className="border h-56 w-96 flex flex-col p-4"
            onSubmit={submitHandler}
        >
            <h1 className="w-full text-center">Login and start Binging </h1>
            <input
                id="email"
                type="text"
                className="w-full  px-3 h-10 border-b my-2 rounded-md appearance-none outline-none"
                placeholder="Email"
                ref={emailRef}
                onChange={changeHandler}
            />
            <input
                id="password"
                type="password"
                className="w-full px-3 h-10 border-b my-2 rounded-md"
                placeholder="Password"
                ref={passwordRef}
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

export default LoginForm;
