import React, { useState, useCallback } from "react";

const useRequest = () => {
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = useCallback(
        async (url: string, method: string, body?: any, headers?: any) => {
            let response;
            setIsLoading(true);
            try {
                let res = await fetch(url, {
                    method: method,
                    body: body,
                    headers: { ...headers, "Content-Type": "application/json" },
                });

                response = await res.json();
                if (res.ok) {
                    console.log(response);
                    setIsLoading(false);
                    setError("");
                    return response;
                } else {
                    setError(response.message);
                }
            } catch (error) {
                setError(response.message);
                setIsLoading(false);
            }

            return null;
        },
        []
    );

    return { error, isLoading, sendRequest };
};

export default useRequest;
