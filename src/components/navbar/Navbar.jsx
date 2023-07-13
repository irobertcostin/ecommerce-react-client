import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../images/logo.png"
import { useNavigate } from 'react-router-dom'
import { useEffect, useContext, useState } from 'react'
import Cookies from 'js-cookie';
import Cart from './navbar-drawer/cart/Cart'
import { Button, Drawer, Radio, Space } from 'antd';
import cartlogo from "..//images/cart.png"

import { HomeOutlined, UserOutlined, ShoppingCartOutlined, OrderedListOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { ContextCart } from '../../context/ContextCart'
import { totalAmount, totalAmountItems } from "../../utils/CartUtils";
import Orders from './navbar-drawer/orders/Orders'
import UserInfo from './navbar-drawer/user-info/UserInfo'
import { ContextUser } from '../../context/ContextCustomers'




export default function Navbar({ signedIn, setSignedIn, totalCartObj, setTotalCartObj }) {


    let navigate = useNavigate();
    let [cart, setCart] = useContext(ContextCart);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');


    let [user, setUser] = useContext(ContextUser)



    const showDrawer = () => {
        setTotalCartObj(totalAmountItems(cart))
        setOpen(true);

    };
    const onClose = () => {
        setOpen(false);
    };


    const CART = "cart";
    const USERINFO = 'info';
    const ORDERS = "orders"

    let [page, setPage] = useState()


    let goCart = () => {
        setPage(CART)
    }

    let goOrders = () => {
        setPage(ORDERS)
    }

    let goInfo = () => {
        setPage(USERINFO)
    }




    let handleSignOut = () => {

        setSignedIn(false)
        Cookies.remove("authenticatedUser");
        navigate("/login")
        Cookies.remove("authenticatedUserCart");
        setUser("")
        onClose();
    }


    let handleAutoLogin = () => {
        // if (Cookies.get("authenticatedUser")) {

        //     setUser(JSON.parse(Cookies.get("authenticatedUser")));
        //     setSignedIn(true)
        //     goHome();
        // } else {

        // }
    }





    const userr = {
        imageUrl:
            'https://cdn.discordapp.com/attachments/1114282751735111690/1114303693140000768/token-logo.png',
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

    let goAdmin = () => {
        navigate("/admin")
    }





    useEffect(() => {
        handleAutoLogin()
    }, [signedIn])

    useEffect(() => {



        if (cart.length > 0) {
            console.log(cart.length);
            setTotalCartObj(totalAmountItems(cart))
        }

    }, [totalCartObj])



    useEffect(() => {
        console.log(user);
        // console.log(signedIn);
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
                                                            className='text-slate-300 hover:text-white ease-in-out duration-300'
                                                        >Home</button>
                                                        <button
                                                            onClick={goProducts}
                                                            className='text-slate-300 hover:text-white ease-in-out duration-300'
                                                        >Shop</button>
                                                        <>
                                                            {
                                                                user.user.role === "admin"
                                                                    ?
                                                                    <button
                                                                        onClick={goAdmin}
                                                                        className='text-slate-300 hover:text-white ease-in-out duration-300'
                                                                    >Admin</button>
                                                                    :
                                                                    <></>
                                                            }
                                                        </>

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

                                                    <button onClick={showDrawer} className='relative flex justify-center items-center text-center mr-4'>
                                                        <ShoppingCartOutlined className="text-white text-2xl" />
                                                        <p className='bg-red-500 px-1.5 text-sm text-white rounded-full absolute -top-1 -right-3'>{totalCartObj}</p>
                                                    </button>

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
                                                    className='text-slate-300  hover:text-white m-0 p-0 ease-in-out duration-300'
                                                >Home
                                                </button>
                                                <button
                                                    onClick={goProducts}
                                                    className='text-slate-300  hover:text-white m-0 p-0 ease-in-out duration-300'
                                                >Shop
                                                </button>
                                                <>
                                                    {
                                                        user.user.role === "admin"
                                                            ?
                                                            <button
                                                                onClick={goAdmin}
                                                                className='text-slate-300 hover:text-white ease-in-out duration-300'
                                                            >Admin</button>
                                                            :
                                                            <></>
                                                    }
                                                </>
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

                                                                <button onClick={showDrawer} className='relative flex justify-center items-center text-center mr-2'>
                                                                    <ShoppingCartOutlined className="text-white text-3xl" />
                                                                    <p className='bg-red-500 px-1.5 text-sm text-white rounded-full absolute -top-1 font-extrabold -right-3'>{totalCartObj}</p>

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
                                        <div className='cursor-pointer flex gap-2 mr-4 justify-center items-center' onClick={goCart}>
                                            <p className='bg-red-500 text-white font-extrabold rounded-full px-1.5'>{totalCartObj}</p>

                                            <ShoppingCartOutlined className=" text-black" />
                                            <span className=" text-black">Cart</span>
                                        </div>
                                    )
                                },
                                {

                                    title: (
                                        <div className='cursor-pointer flex gap-2 mx-4 justify-center items-center' onClick={goInfo}>
                                            <UserOutlined className=" text-black" />
                                            <span className=" text-black">Info</span>
                                        </div>
                                    ),
                                }, {

                                    title: (
                                        <div className='cursor-pointer flex gap-2 mx-4 justify-center items-center' onClick={goOrders}>
                                            <OrderedListOutlined className=" text-black" />
                                            <span className=" text-black">Orders</span>
                                        </div>
                                    ),
                                }
                            ]}
                        />




                    </div>

                    <div className='w-full mt-4 pl-3'>
                        {(() => {
                            switch (page) {
                                case CART:
                                    return <Cart setOpen={setOpen} />;


                                case USERINFO:
                                    return <UserInfo user={user} />;

                                case ORDERS:
                                    return <Orders />



                                default:
                                    return <Cart />
                            }
                        })()}

                    </div>
                </Drawer>

            </div>
        </>
    )
}