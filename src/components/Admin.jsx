import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import React, { useState, useEffect } from 'react'

import AdmDetails from "../components/admin-components/AdmDetails"
import AdmUsers from "../components/admin-components/AdmUsers"
import AdmProducts from "../components/admin-components/AdmProducts"
import AdmOrders from "../components/admin-components/AdmOrders"





export default function Admin() {








    const admDetails = "admDetails";
    const admUsers = 'admUsers';
    const admProducts = "admProducts";
    const admOrders = "admOrders";



    let [page, setPage] = useState(admDetails)


    let goUsers = () => {
        setPage(admUsers)
    }

    let goOrders = () => {
        setPage(admOrders)
    }

    let goDetails = () => {
        setPage(admDetails)

    }


    let goProducts = () => {
        setPage(admProducts)

    }









    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }









    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-indigo-950">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">

                                            <p className='text-white'>Admin Panel</p>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">

                                                <button onClick={goProducts} className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>Products</button>
                                                <button onClick={goUsers} className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>Users</button>
                                                <button onClick={goOrders} className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>Orders</button>
                                                <button onClick={goDetails} className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>Order Details</button>

                                            </div>
                                        </div>
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
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">

                                    <button onClick={goProducts} className='block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>Products</button>
                                    <button onClick={goUsers} className='block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>Users</button>
                                    <button onClick={goOrders} className='block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>Orders</button>
                                    <button onClick={goDetails} className='block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>Order Details</button>

                                </div>

                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Welcome, admin</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 min-h-[30vh]">
                        {(() => {
                            switch (page) {
                                case admUsers:
                                    return <AdmUsers />;


                                case admDetails:
                                    return <AdmDetails />;

                                case admProducts:
                                    return <AdmProducts />

                                case admOrders:
                                    return <AdmOrders />

                                default:
                                    return <AdmUsers />
                            }
                        })()}

                    </div>
                </main>
            </div>
        </>
    )
}