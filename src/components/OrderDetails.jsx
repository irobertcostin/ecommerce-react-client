
import React, { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Data from "../services/Api";
import { ClimbingBoxLoader } from "react-spinners";



export default function OrderDetails({ showOrder, isOrderLoading, setIsOrderLoading }) {


    let api = new Data();

    let [noDetails, setNoDetails] = useState(true)

    let [details, setDetails] = useState();

    let retrieveDetails = async () => {

        let x = await api.getOrderDetailsByOrderId(showOrder);
        if (x.info) {
            setNoDetails(true)
            setIsOrderLoading(false)
            console.log(x.info);
        } else {
            setNoDetails(false)
            setIsOrderLoading(false)
            setDetails(x);

        }





    }



    useEffect(() => {

        if (showOrder) {
            retrieveDetails();

        }

    }, [showOrder])


    useEffect(() => {

        console.log(details);

    }, [details])







    return (
        <>

            {
                isOrderLoading
                    ?
                    <div className='w-full min-h-[12vh] flex justify-center items-center'>
                        <DotLoader color="#CCFF00" />
                    </div>
                    :

                    <>
                        {
                            noDetails
                                ?
                                <p>No order details available</p>
                                :


                                <div className=" w-full h-[100%] py-4 flex overflow-x-scroll">

                                    {
                                        details.map(element => {
                                            return (
                                                <div key={element.product_id} className="border min-w-[28vh] ml-2 p-1 mr-2">

                                                    <img className=""></img>

                                                    <div className="flex justify-between px-6 text-xs">

                                                        <div>
                                                            <p>Order id {showOrder}</p>
                                                            <p>Product id {element.product_id}</p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p>Price ${element.price}</p>
                                                            <p>Quantity {element.quantity}</p>

                                                        </div>

                                                    </div>

                                                </div>
                                            )
                                        })
                                    }
                                </div>


                        }
                    </>
            }


        </>
    )


}