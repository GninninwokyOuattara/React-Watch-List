import React, { useState, useEffect } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";

const Form = () => {
    const [formData, setFormData] = useState({});

    const setForm = (id: string, value: string) => {
        let data = { [id]: value };
        setFormData((formData) => {
            return { ...formData, ...data };
        });
    };

    const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form
            className="flex flex-col w-80 h-96 bg-black rounded-md px-3 py-4"
            onSubmit={submitHandler}
        >
            <Input for={"email"} type="text" inputHandler={setForm} />
            <Input
                for={"password"}
                type="password"
                inputHandler={setForm}
                min={8}
            />
            <Button bottom>Log In</Button>
        </form>
    );
};

export default Form;
