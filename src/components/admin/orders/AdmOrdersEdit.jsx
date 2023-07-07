import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../../../services/Api";
import AdmSingleOrderDetailsRow from "./AdmSingleOrderDetailsRow";


export default function AdmOrdersEdit() {

    let id = useParams().id

    let [order, setOrder] = useState()
    let [customer, setCustomer] = useState();
    let [orderDetails, setOrderDetails] = useState();
    let [detailsActive, setDetailsActive] = useState(false);


    let checkDetails = () => setDetailsActive(!detailsActive)


    let api = new Data();


    let retrieveCustomerByOrderId = async (id) => {
        let data = await api.getCustomerById(id);
        console.log(data);
        setCustomer(data)

    }

    let retrieveOrderDetailsByOrderId = async (id) => {

        let data = await api.getOrderDetailsByOrderId(id)
        setOrderDetails(data);
    }


    let retrieveOrderById = async (id) => {

        let data = await api.getOrderById(id)

        setOrder(data);
        retrieveCustomerByOrderId(data.customer_id)
        retrieveOrderDetailsByOrderId(id)

    }





    useEffect(() => {


        if (id) {
            retrieveOrderById(id)
            console.log(order);
        }

    }, [id])




    return (
        <div className="w-full  p-4 flex justify-center items-center">
            {
                order && customer && orderDetails &&
                <div className="w-full  flex justify-center items-center">

                    <div className="w-full max-w-[500px]">

                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex items-center justify-between">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Order ID: </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">{order.id}</dd>
                        </div>

                        <div className=" border-t border-gray-100">


                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex justify-between items-center">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Customer ID: </dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">{order.customer_id}</dd>
                                </div>


                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex items-center justify-between">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Customer name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">{customer.full_name}</dd>
                                </div>

                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex items-center justify-between">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">{customer.email}</dd>
                                </div>

                                <div className="w-full flex flex-col">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex items-center justify-between">
                                        <dt className="text-sm  font-medium leading-6 text-gray-900">Order details</dt>
                                        <dd className=" text-sm leading-6 flex justify-start items-center gap-2 text-gray-900 sm:col-span-2 sm:mt-0">

                                            <button onClick={checkDetails}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                </svg>
                                            </button>
                                            <p>{orderDetails.length}</p>
                                        </dd>
                                    </div>

                                    <div className="w-full">
                                        {
                                            detailsActive ?
                                                <div className="divide-y divide-gray-100 border border-indigo-400 p-4 mt-4">

                                                    {
                                                        orderDetails.map((element) => {

                                                            return <AdmSingleOrderDetailsRow key={element.id} element={element} />

                                                        })
                                                    }

                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>



                                </div>

                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex items-center justify-between">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Total</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">${order.amount}</dd>
                                </div>






                            </dl>
                        </div>
                    </div>


                    <div>



                    </div>




                </div>



            }
        </div>
    )

}