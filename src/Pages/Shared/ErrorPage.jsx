import Lottie from 'lottie-react';
import React from 'react';
import errorAnimationData from '../../assets/error.json'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <div className='w-80 mx-auto pt-12'>
                <Lottie animationData={errorAnimationData}></Lottie>
            </div>
            <div className='w-full mx-auto flex justify-center'>
                <NavLink className='p-3 bg-sky-300 rounded-lg  font-bold hover:bg-indigo-800 hover:text-white duration-300' to={'/'}>Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;