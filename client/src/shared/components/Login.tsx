import React, { useRef, useState, useContext } from "react";
import { authContext, userData, authType } from "../context/authContext";
import BackdropBlack from "../../components/BackdropBlack";

let server_url = process.env.REACT_APP_SERVER_DEV as string;

interface props {
    onCancel: () => void;
}

const LoginForm: React.FC<props> = (props) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [formData, setFormData] = useState({});
    const auth = useContext(authContext);

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
            let response: { message: string; user: userData } =
                await res.json();
            auth?.logHimIn(response.user);
        }
    };

    return (
        <BackdropBlack onCancel={props.onCancel}>
            <form
                action=""
                className="border h-56 w-96 flex flex-col p-4 z-10 bg-white"
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
                    <button
                        type="submit"
                        className="h-10 w-24 border rounded-xl"
                    >
                        Let's Go
                    </button>
                </div>
            </form>
        </BackdropBlack>
    );
};

export default LoginForm;
