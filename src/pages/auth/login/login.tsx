import React from "react"
import purpleImage from '../../../assets/images/3d-purple.jpg';
import './login.css';

export function Login() {
    return <>
        <div className="bg">
            <div className="input_card glass_effect">
                <div className="font-bold text-2xl  text-center text-white	">Login</div>
                <div className="mt-7 relative">
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-white sm:text-sm "><i className="fa fa-user"></i></span>
                    </div>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-20  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2 focus:ring-transparent focus:white-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="mt-7 relative">
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-white sm:text-sm "><i className="fa fa-lock"></i></span>
                    </div>
        
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        className="block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-20  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2 focus:ring-transparent focus:white-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="mt-7 text-center">
                    <button type="button" className="focus:outline-none w-full text-gray-950 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-500 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>

                </div>

            </div>
        </div>
    </>
}