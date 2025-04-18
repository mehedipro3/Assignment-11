import React from 'react';
import { RotateLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <RotateLoader color="#8ce1ef" />
        </div>
    );
};

export default Loading;