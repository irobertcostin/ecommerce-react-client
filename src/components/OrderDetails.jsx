
import React, { useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import Data from "../services/Api";



export default function OrderDetails({ showOrder, isOrderLoading, setIsOrderLoading }) {


    let api = new Data();

    let retrieveDetails = async () => {

        await api.getOrderDetailsByOrderId(showOrder);

        // console.log(orderDetails);

        setIsOrderLoading(false)
        // console.log(isOrderLoading);

    }



    useEffect(() => {

        if (showOrder) {
            retrieveDetails();
            // comment
        }

    }, [showOrder])


    useEffect(() => {

        // console.log(showOrder);

    }, [])







    return (
        <>

            {
                isOrderLoading
                    ?
                    <div className='w-full min-h-[12vh] flex justify-center items-center'>
                        <DotLoader color="#CCFF00" />
                    </div>
                    :
                    <p>{showOrder}</p>
            }


        </>
    )


}