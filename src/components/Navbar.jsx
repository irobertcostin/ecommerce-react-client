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

import { HomeOutlined, UserOutlined, ShoppingCartOutlined, OrderedListOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { CartProvider } from '../context/ContextCart'




export default function Navbar({ signedIn, setSignedIn, setUser, user }) {


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
        Cookies.remove("authenticatedUser");
        navigate("/customers/login")
        Cookies.remove("authenticatedUserCart");
        setUser("")
        onClose();
    }


    let handleAutoLogin = () => {
        if (Cookies.get("authenticatedUser")) {

            setUser(JSON.parse(Cookies.get("authenticatedUser")));
            setSignedIn(true)
            goHome();
        }
    }





    const userr = {
        name: 'My Code User',
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
        // console.log(signedIn);
        // console.log(user);
    }, [signedIn])



    useEffect(() => {
        // console.log(user);
    }, [user])



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
                                            !user
                                                ?
                                                <></>
                                                :

                                                <div className="ml-4 flex items-center md:ml-6 ">

                                                    <div className="ml-3 flex flex-col text-end">
                                                        <div className="text-sm font-medium leading-none text-gray-400">Welcome back,</div>
                                                        <div className="text-base font-medium leading-none text-white">{user.user.full_name}</div>

                                                    </div>

                                                    <Menu as="div" className="relative ml-3">


                                                        <div>
                                                            <Menu.Button onClick={showDrawer} className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none">

                                                                <img className="h-12 w-12 rounded-full" src={userr.imageUrl} alt="" />
                                                            </Menu.Button>
                                                        </div>
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

                            <Disclosure.Panel className="md:hidden">
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


                                                {
                                                    !user ? <></>
                                                        : <div className="flex items-center px-5 ">
                                                            <div className="flex-shrink-0">
                                                                <img className="h-12 w-12 rounded-full" src={userr.imageUrl} alt="" />
                                                            </div>
                                                            <div className="ml-3 flex flex-col">
                                                                <div className="text-base font-medium leading-none text-white">{user.user.full_name}</div>
                                                                <div className="text-sm font-medium leading-none text-gray-400">{user.user.email}</div>
                                                            </div>
                                                            <div className='w-full flex items-center justify-end  gap-5'>

                                                                {/* <button className=' text-slate-300 hover:text-white w-10 h-10  ease-in-out duration-300' >
                                                            <img src={cartlogo}>

                                                            </img>
                                                        </button> */}
                                                                <button
                                                                    onClick={showDrawer}
                                                                    className="flex justify-center rounded-md bg-[#CCFF00] px-3 py-1 text-sm font-semibold leading-6  shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                >
                                                                    My account
                                                                </button>
                                                            </div>
                                                        </div>
                                                }





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
                    title="My account"

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
                    <div className=' w-full flex justify-center items-center  text-lg'>

                        <Breadcrumb
                            separator="/"
                            className=' w-full flex justify-center mb-2'
                            items={[
                                {
                                    title: (
                                        <div className='cursor-pointer flex gap-2 mx-4 justify-center items-center'>
                                            <ShoppingCartOutlined className="" />
                                            <span>Cart</span>
                                        </div>
                                    )
                                },
                                {

                                    title: (
                                        <div className='cursor-pointer flex gap-2 mx-4 justify-center items-center'>
                                            <UserOutlined />
                                            <span>Info</span>
                                        </div>
                                    ),
                                }, {

                                    title: (
                                        <div className='cursor-pointer flex gap-2 mx-4 justify-center items-center'>
                                            <OrderedListOutlined />
                                            <span>Orders</span>
                                        </div>
                                    ),
                                }
                            ]}
                        />




                    </div>

                    <div className='w-full mt-4 border'>

                        <Cart setOpen={setOpen} />

                    </div>
                </Drawer>

            </div>
        </>
    )
}