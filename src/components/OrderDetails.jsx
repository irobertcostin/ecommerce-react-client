
import React, { useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";




export default function OrderDetails({ showOrder, isOrderLoading, setIsOrderLoading }) {





    useEffect(() => {

        console.log(isOrderLoading);
        setIsOrderLoading(false)
    }, [isOrderLoading])


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