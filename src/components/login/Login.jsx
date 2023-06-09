
import { useNavigate } from "react-router-dom"
import { ContextUser } from "../../context/ContextCustomers";
import React, { useState, useEffect, useContext } from "react";
import Data from "../../services/Api";
import Cookies from "js-cookie";
import logo from "../images/logo.png"


export default function Login({ setSignedIn }) {


    let navigate = useNavigate();



    let goHome = () => {

        navigate("/")
    }

    let goRegister = () => {

        navigate("/register")
    }


    let [user, setUser] = useContext(ContextUser)





    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let emailOnChange = (element) => {
        setEmail(element.target.value)
    }



    let passOnChange = (element) => {
        setPassword(element.target.value)
    }




    let login = async (e) => {

        e.preventDefault();

        if (email !== "" && password !== "") {
            let api = new Data();
            let attempt = await api.login(email, password)
            // console.log(attempt);
            if (attempt) {
                // Cookies.set("authenticatedUser", JSON.stringify(attempt));
                // console.log(attempt);
                setUser(attempt)
                setSignedIn(true)
                goHome();
            }
        }
    }














    useEffect(() => {
        // console.log(user);
    }, [])


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                {/* <div onClick={goHome} className=" w-[25px] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                </div> */}

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={emailOnChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <button onClick={goRegister} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Not registered yet?
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={passOnChange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={login}

                                className="flex w-full justify-center rounded-md bg-indigo-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#CCFF00] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-10 text-sm text-gray-500 bg-slate-100 rounded-md bg-opacity-80 p-4">
                        <p className="text-md font-semibold w-full text-center mb-4">Use this login data: </p>
                        <div className=" p-4 flex flex-col-2 justify-between items-center flex-wrap">
                            {/* {customers.map((item) => (
                                <div key={item.name} className="w-full flex justify-between items-center">
                                    <p onClick={handleCopyClick}>{item.email}</p>
                                    <p onClick={handleCopyClick}>{item.password}</p>
                                </div>
                            ))} */}
                            <p >gbellew0@amazon.co.jp</p>
                            <p>xI9mTrM</p>

                            <p>fcarlan1@yale.edu</p>
                            <p>uB7mlEO!HM</p>

                            <p>mdracksford2@tripod.com</p>
                            <p>bS53hk?jy=6</p>

                            <p>urhymer3@blog.com</p>
                            <p>zQ4mmu38</p>

                            <p>ddaily4@blogs.com</p>
                            <p>jH49gO64ox</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}