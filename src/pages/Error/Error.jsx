import React from 'react';
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
            <p className="text-lg text-gray-700 mt-4">
                Sorry, an unexpected error has occurred.
            </p>
            {error && (
                <p className="text-sm text-gray-500 mt-2">
                    <i>{error.statusText || error.message}</i>
                </p>
            )}
            <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Go to Home
            </a>
        </div>
    );
};

export default Error;