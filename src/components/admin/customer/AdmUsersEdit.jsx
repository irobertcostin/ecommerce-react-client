import { useParams, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Data from "../../../services/Api";
import { Button, Input, Empty, Modal, message } from 'antd';
import { totalSpent } from "../../../utils/CustomerUtils"





export default function AdmUsersEdit() {


    /// delete confirmation

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };

    const navigate = useNavigate();



    let id = useParams().id

    let [customer, setCustomer] = useState();
    let [customerOrders, setCustomerOrders] = useState();
    let [totalAmountSpent, setTotalAmountSpent] = useState(0)




    let [editName, setEditName] = useState(false)
    let [editEmail, setEditEmail] = useState(false)
    let [editPass, setEditPass] = useState(false)


    let [newName, setNewName] = useState();
    let [newEmail, setNewEmail] = useState();
    let [newPass, setNewPass] = useState();


    let [confirmDel, setConfirmDel] = useState()
    let [wrong, setWrong] = useState(false)
    let [isDeleted, setIsDeleted] = useState(false)


    let checkEmailDeletion = (item) => {
        setConfirmDel(item.target.value);
        if (item.target.value === customer.email) {
            setWrong(false)
        }
    }

    let confirmDeletion = () => {

        if (customer.email === confirmDel) {
            hideModal()
            setIsDeleted(true)
        } else {
            console.log("wrong");
            setWrong(true)
        }


        // console.log(item.target);
        // hideModal()
    }



    // edit customer
    let newNameFx = (item) => {
        setNewName(item.target.value);
    }


    let newEmailFx = (item) => {
        setNewEmail(item.target.value);
    }

    let newPassFx = (item) => {
        setNewPass(item.target.value);
    }



    // show edit fields
    let editNameFx = () => {
        setEditName(!editName)
    }

    let editEmailFx = () => {
        setEditEmail(!editEmail)
    }

    let editPassFx = () => {
        setEditPass(!editPass)
    }


    let submitNewName = () => {
        editNameFx()
    }



    let goAdmin = () => {
        navigate('/admin')
    }









    let api = new Data();

    let retrieveCustomer = async (id) => {
        let data = await api.getCustomerById(id);
        setCustomer(data);
    }


    let retrieveOrdersByCustomer = async (id) => {
        let data = await api.getOrdersByCustomerId(id);
        if (data) {
            setCustomerOrders(data);
            setTotalAmountSpent(totalSpent(data));
        }
    }




    useEffect(() => {
        retrieveCustomer(id);

        retrieveOrdersByCustomer(id);
    }, [id]);





    useEffect(() => {

    }, []);






    return (
        <>
            <div className="w-full md:px-12 md:min-h-[70.8vh]">
                {

                    isDeleted
                        ?
                        <>
                            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                                <div className="text-center">
                                    <p className="text-base font-semibold text-indigo-600">confirmation of user deletion</p>
                                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-green-600 sm:text-5xl">success</h1>
                                    <p className="mt-6 text-base leading-7 text-gray-600">You successfully deleted {customer.email}</p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <button
                                            onClick={goAdmin}
                                            className="rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Go back to admin center
                                        </button>

                                    </div>
                                </div>
                            </main>
                        </>
                        :
                        <>
                            {

                                customer
                                    ?
                                    (
                                        <>
                                            <div className="pt-5">
                                                <div className="px-4  sm:px-0">
                                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Customer Information</h3>
                                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details</p>
                                                </div>
                                                <div className="mt-6 border-t border-gray-100">
                                                    <dl className="divide-y divide-gray-100 relative">
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 w-full">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                                                            <dd className="flex justify-between items-center  h-[20px]  mt-1  text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                <p>{customer.full_name}</p>
                                                                <>
                                                                    {
                                                                        !editName
                                                                            ?
                                                                            <button className="" onClick={editNameFx}>

                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                                </svg>

                                                                            </button>
                                                                            :
                                                                            <Button type="primary" danger onClick={editNameFx} className="">Cancel</Button>

                                                                    }
                                                                </>
                                                            </dd>

                                                            <dd className="mt-1 py-1   flex justify-between  col-start-2 col-span-2 items-center">
                                                                {
                                                                    editName
                                                                        ?
                                                                        <div className="flex justify-between w-full gap-10">
                                                                            {/* <Input size="small" onChange={newNameFx} placeholder="Change full name" className="rounded-md h-[31px]" />
                                             */}
                                                                            <input
                                                                                onChange={newNameFx} placeholder="Change full name"
                                                                                required
                                                                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                            />
                                                                            <Button type="primary" className="bg-blue-700" onClick={submitNewName}>Submit</Button>
                                                                        </div>
                                                                        :
                                                                        <></>
                                                                }
                                                            </dd>

                                                        </div>


                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                                                            <dd className="flex justify-between items-center  h-[20px]  mt-1  text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                <p>{customer.email}</p>
                                                                <>
                                                                    {
                                                                        !editEmail
                                                                            ?
                                                                            <button className="" onClick={editEmailFx}>

                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                                </svg>

                                                                            </button>
                                                                            :
                                                                            <Button type="primary" danger onClick={editEmailFx} className="">Cancel</Button>

                                                                    }
                                                                </>
                                                            </dd>

                                                            <dd className="mt-1 py-1  flex col-start-2 col-span-2  justify-between items-center">
                                                                {
                                                                    editEmail
                                                                        ?
                                                                        <div className="flex justify-between w-full gap-10">
                                                                            <input
                                                                                onChange={newEmailFx} placeholder="Change email address"
                                                                                id="email"
                                                                                name="email"
                                                                                type="email"
                                                                                autoComplete="email"
                                                                                required
                                                                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                            />
                                                                            <Button type="primary" className="bg-blue-700" onClick={editEmailFx}>Submit</Button>
                                                                        </div>
                                                                        :
                                                                        <></>
                                                                }
                                                            </dd>
                                                        </div>



                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Password</dt>
                                                            <dd className="flex justify-between items-center  h-[20px]  mt-1  text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                <p>{customer.password}</p>
                                                                <>
                                                                    {
                                                                        !editPass
                                                                            ?
                                                                            <button className="" onClick={editPassFx}>

                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                                </svg>

                                                                            </button>
                                                                            :
                                                                            <Button type="primary" danger onClick={editPassFx} className="">Cancel</Button>

                                                                    }
                                                                </>
                                                            </dd>

                                                            <dd className="mt-1 py-1 col-start-2 col-span-2   flex justify-between items-center">
                                                                {
                                                                    editPass
                                                                        ?
                                                                        <div className="flex justify-between w-full gap-10">
                                                                            <input
                                                                                onChange={newPassFx} placeholder="Change password"
                                                                                required
                                                                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                            />
                                                                            <Button type="primary" className="bg-blue-700" onClick={editPassFx}>Submit</Button>
                                                                        </div>
                                                                        :
                                                                        <></>
                                                                }
                                                            </dd>
                                                        </div>

                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Orders</dt>
                                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                {
                                                                    customerOrders ?
                                                                        <div className="w-full flex justify-between items-center">
                                                                            <div className=" w-full flex gap-20 justify-start items-center">
                                                                                <p>Sum: {customerOrders.length}</p>
                                                                                <p>Total spent: <span className="text-green-600 font-bold">$</span>{totalAmountSpent}</p>
                                                                            </div>
                                                                            <button  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                                            </svg>
                                                                            </button>
                                                                        </div>
                                                                        : <p>0</p>
                                                                }
                                                            </dd>
                                                        </div>

                                                        <div className="px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-0 w-full">
                                                            <p className="font-bold text-red-600">Delete customer</p>
                                                            <Button type="primary" onClick={showModal} danger className="" >Delete</Button>
                                                        </div>

                                                        <div className="px-4 py-6 flex justify-center  items-center sm:gap-4 sm:px-0 w-full">
                                                            <button
                                                                onClick={goAdmin}
                                                                className="rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                            >
                                                                Go back to admin center
                                                            </button>
                                                        </div>



                                                    </dl>


                                                    <Modal
                                                        title='Confirm customer deletion'
                                                        open={open}
                                                        onOk={confirmDeletion}
                                                        onCancel={hideModal}
                                                        okText="Confirm"
                                                        cancelText="Cancel"
                                                        okType="danger"
                                                        closable={false}
                                                        className="relative"
                                                    >
                                                        <p className="mb-8">Please type in the customer's email address to confirm deletion</p>

                                                        {
                                                            wrong && <p className="font-bold text-red-600 absolute top-[100px] left-7 md:top-[80px]">wrong email address</p>
                                                        }

                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            placeholder="Customer email address"
                                                            required
                                                            onChange={checkEmailDeletion}
                                                            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </Modal>




                                                </div>
                                            </div>
                                        </>
                                    )
                                    :
                                    (
                                        <div className='w-full min-h-[35.4vh] md:min-h-[70.6vh] flex justify-center items-center'>
                                            <DotLoader color="#CCFF00" />
                                        </div>
                                    )


                            }
                        </>
                }
            </div>


        </>
    )
}