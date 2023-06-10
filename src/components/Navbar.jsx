import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "./images/logo.png"
import { useNavigate } from 'react-router-dom'
import { useEffect, useContext, useState } from 'react'
import Cookies from 'js-cookie';
import Cart from './Cart'
import { Button, Drawer, Radio, Space } from 'antd';
import cartlogo from "../components/images/cart.png"




export default function Navbar({ signedIn, setSignedIn, setUser }) {


    let navigate = useNavigate();




    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };






    let handleSignOut = () => {

        setSignedIn(false)
        // Cookies.remove("authenticatedUser");
        navigate("/customers/login")
        onClose();
    }


    let handleAutoLogin = () => {
        if (Cookies.get("authenticatedUser")) {
            setUser(JSON.parse(Cookies.get("authenticatedUser")));
            setSignedIn(true)
            navigate("/")
        }
    }





    const user = {
        name: 'Tim Tok',
        email: 'tom@example.com',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1114282751735111690/1114303693140000768/token-logo.png',
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
                <Disclosure as="nav" className="bg-indigo-950 ease-in-out duration-300">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="mx-auto w-full bg-indigo-950  text-center">
                                            <h1 className="text-3xl py-1 font-extrabold tracking-tight text-[#CCFF00]">SETTERS STORE</h1>
                                        </div>
                                        <div className="hidden md:block">
                                            {
                                                signedIn
                                                    ?
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
                                                    :
                                                    <></>
                                            }
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        {
                                            !signedIn
                                                ?
                                                <></>
                                                :

                                                <div className="ml-4 flex items-center md:ml-6 ">



                                                    <Menu as="div" className="relative ml-3">
                                                        <div>
                                                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none">
                                                                <span className="sr-only">Open user menu</span>
                                                                <img className="h-12 w-12 rounded-full" src={user.imageUrl} alt="" />
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
                                                                            <button className='w-full hover:bg-slate-200  ease-in-out duration-300' onClick={showDrawer}>Cart</button>

                                                                        </div>
                                                                }
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                        }
                                    </div>


                                    <div className="-mr-2 flex md:hidden">
                                        {
                                            signedIn
                                                ?
                                                <>
                                                    {/* Mobile menu button */}
                                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="sr-only">Open main menu</span>
                                                        {open ? (
                                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </Disclosure.Button>
                                                </>
                                                :
                                                <>

                                                </>
                                        }
                                    </div>


                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden ">
                                {
                                    signedIn
                                        ?
                                        <>
                                            <div className="  px-2 pb-3 pt-2 sm:px-3 text-lg flex justify-center items-center gap-10">



                                                <button
                                                    onClick={goHome}
                                                    className='text-slate-300  hover:text-white m-0 p-0'
                                                >Home
                                                </button>
                                                <button
                                                    onClick={goProducts}
                                                    className='text-slate-300  hover:text-white m-0 p-0'
                                                >Shop
                                                </button>
                                                <button
                                                    onClick={goProducts}
                                                    className='text-slate-300  hover:text-white m-0 p-0'
                                                >Products
                                                </button>
                                            </div>




                                            <div className="border-t border-gray-700 pb-3 pt-4">


                                                <div className="flex items-center px-5 ">
                                                    <div className="flex-shrink-0">
                                                        <img className="h-12 w-12 rounded-full" src={user.imageUrl} alt="" />
                                                    </div>
                                                    <div className="ml-3 flex flex-col">
                                                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                                    </div>
                                                    <div className='w-full flex items-center justify-end  gap-5'>

                                                        <button className=' text-slate-300 hover:text-white w-10 h-10  ease-in-out duration-300' onClick={showDrawer}>
                                                            <img src={cartlogo}>

                                                            </img>
                                                        </button>
                                                        {/* <button
                                                            onClick={handleSignOut}
                                                            className="flex justify-center rounded-md bg-[#CCFF00] px-3 py-1 text-sm font-semibold leading-6  shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                        >
                                                            Sign Out
                                                        </button> */}
                                                    </div>
                                                </div>




                                                <div className="mt-3 space-y-1 px-2">
                                                    <div className='w-full flex flex-col px-1 py-2 justify-center items-center gap-4'>
                                                        <button className='w-full  text-slate-300 hover:text-white ease-in-out duration-300'>Your Profile</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <></>
                                }
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>



                <div className="bg-white shadow">
                    <div className='w-full bg-[#CCFF00] text-center'>
                        <p>SETTERS X EVENTS NOW ON! Elevate your wardrobe with us!</p>
                    </div>
                </div>


                <Drawer
                    title="User section"
                    placement={placement}
                    width={375}
                    // onClose={onClose}
                    open={open}
                    closeIcon={""}
                    extra={
                        <Space>
                            <button
                                onClick={onClose}
                                className="flex w-full justify-center rounded-md bg-indigo-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Close
                            </button>

                            <button
                                onClick={handleSignOut}
                                className="flex w-full justify-center rounded-md bg-indigo-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Out
                            </button>

                        </Space>
                    }
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>

            </div>
        </>
    )
}