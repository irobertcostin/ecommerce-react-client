import { useState } from "react";
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom"
import Data from "../../services/Api";


export default function Register() {

    let navigate = useNavigate();

    let goLogin = () => {

        navigate("/login")
    }



    let [name, setName] = useState();
    let [pass, setPass] = useState();
    let [passConf, setPassConf] = useState();
    let [email, setEmail] = useState();


    let nameInput = (item) => {
        setName(item.target.value);
    }

    let emailInput = (item) => {
        setEmail(item.target.value);
    }

    let passInput = (item) => {
        setPass(item.target.value);
    }

    let passConfInput = (item) => {
        setPassConf(item.target.value);
    }



    let api = new Data();





    let registerAccount = async () => {

        let newCustomer = {
            full_name: name,
            email: email,
            password: pass,
            confirmedPassword: passConf,
            role: "customer"
        }

        console.log(newCustomer);

        let x = await api.register(newCustomer);









        console.log(x);



    }




    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">


                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 rounded-md w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register a new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" >

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Full name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={nameInput}
                                    id="name"
                                    name="name"
                                    type="name"
                                    // autoComplete="email"
                                    required
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={emailInput}
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
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={passInput}
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Repeat password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={passConfInput}
                                    id="password2"
                                    name="password2"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </form>


                    <div className="mt-10">
                        <button
                            onClick={registerAccount}
                            className="flex w-full justify-center rounded-md bg-indigo-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </button>
                    </div>




                    <div className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <p onClick={goLogin} className="font-semibold cursor-pointer leading-6 text-indigo-950 hover:text-indigo-500">
                            Sign-in here
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}