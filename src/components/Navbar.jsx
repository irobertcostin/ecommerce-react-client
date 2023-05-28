import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "./images/logo.png"
import { useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import Cookies from 'js-cookie';




export default function Navbar({ signedIn, setSignedIn }) {


    let navigate = useNavigate();




    let handleSignOut = () => {
        console.log(signedIn);
        setSignedIn(false)
    }


    let handleAutoLogin = () => {


        if (Cookies.get("authenticatedUser")) {
            // setUser(JSON.parse(Cookies.get("authenticatedUser")));
            setSignedIn(true)
        }
    }





    const user = {
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }





    const userNavigation = [
        { name: 'Your Profile', href: '' },
        { name: 'Settings', href: '' },
        { name: 'Sign out', onClick: handleSignOut },
    ]


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }



    let goLogin = () => {

        navigate("/customers/login")
    }

    let goProducts = () => {

        navigate("/gallery")
    }




    let goHome = () => {

        navigate("/")
    }




    useEffect(() => {


        handleAutoLogin()

    }, [signedIn])


    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-indigo-950">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="mx-auto w-full bg-indigo-950  text-center">
                                            <h1 className="text-3xl py-1 font-extrabold tracking-tight text-[#CCFF00]">SETTERS STORE</h1>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                <button
                                                    onClick={goHome}
                                                    className='text-slate-300 hover:text-white'
                                                >Home</button>
                                                <button
                                                    onClick={goProducts}
                                                    className='text-slate-300 hover:text-white'
                                                >Shop</button>
                                                <button
                                                    onClick={goProducts}
                                                    className='text-slate-300 hover:text-white'
                                                >Products</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        {
                                            !signedIn
                                                ?
                                                <div>
                                                    <button onClick={goLogin} className='bg-[#CCFF00] px-5 py-1 text-lg font-extrabold rounded-md'>Log in</button>
                                                    {/* <button onClick={goRegister} className='bg-[#CCFF00] px-3 py-2 text-lg font-extrabold rounded-md'>Register</button> */}

                                                </div>
                                                :

                                                <div className="ml-4 flex items-center md:ml-6">



                                                    <Menu as="div" className="relative ml-3">
                                                        <div>
                                                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <span className="sr-only">Open user menu</span>
                                                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                {
                                                                    !signedIn
                                                                        ?
                                                                        <div>
                                                                            <button onClick={goLogin} className='bg-[#CCFF00] px-3 py-2 text-lg font-extrabold rounded-md'>Log in</button>
                                                                            {/* <button onClick={goRegister} className='bg-[#CCFF00] px-3 py-2 text-lg font-extrabold rounded-md'>Register</button> */}

                                                                        </div>
                                                                        :
                                                                        <div className='w-full flex flex-col px-1 py-2 justify-center items-center gap-4'>
                                                                            <button className='w-full hover:bg-slate-200  ease-in-out duration-300'>Your Profile</button>
                                                                            <button className='w-full hover:bg-slate-200  ease-in-out duration-300' onClick={handleSignOut}>Sign Out</button>
                                                                        </div>
                                                                }
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                        }
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3  flex flex-col gap-4">
                                    <button
                                        onClick={goHome}
                                        className='text-slate-300 hover:text-white w-full '
                                    >Home</button>
                                    <button
                                        onClick={goProducts}
                                        className='text-slate-300 hover:text-white'
                                    >Shop</button>
                                    <button
                                        onClick={goProducts}
                                        className='text-slate-300 hover:text-white'
                                    >Products</button>
                                </div>
                                <>
                                    {
                                        !signedIn
                                            ?
                                            <div className='w-full flex justify-center items-center pb-4'>
                                                <button onClick={goLogin} className='bg-[#CCFF00] px-3 py-2 text-sm w-full mx-6 font-extrabold rounded-md'>Log in</button>
                                                {/* <button onClick={goRegister} className='bg-[#CCFF00] px-3 py-2 text-lg font-extrabold rounded-md'>Register</button> */}

                                            </div>
                                            :
                                            <div className="border-t border-gray-700 pb-3 pt-4">
                                                <div className="flex items-center px-5">
                                                    <div className="flex-shrink-0">
                                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                                    </div>

                                                </div>
                                                <div className="mt-3 space-y-1 px-2">
                                                    {
                                                        !signedIn
                                                            ?
                                                            <div className='w-full justify-center items-center'>
                                                                <button onClick={goLogin} className='bg-[#CCFF00] px-3 py-2 text-lg font-extrabold rounded-md'>Log in</button>
                                                                {/* <button onClick={goRegister} className='bg-[#CCFF00] px-3 py-2 text-lg font-extrabold rounded-md'>Register</button> */}

                                                            </div>
                                                            :
                                                            <div className='w-full flex flex-col px-1 py-2 justify-center items-center gap-4'>
                                                                <button className='w-full  text-slate-300 hover:text-white ease-in-out duration-300'>Your Profile</button>
                                                                <button className='w-full   ease-in-out text-slate-300 hover:text-white duration-300' onClick={handleSignOut}>Sign Out</button>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                    }
                                </>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <div className="bg-white shadow">
                    <div className='w-full bg-[#CCFF00] text-center'>
                        <p>SETTERS X EVENTS NOW ON! Elevate your wardrobe with us!</p>
                    </div>



                </div>

            </div>
        </>
    )
}