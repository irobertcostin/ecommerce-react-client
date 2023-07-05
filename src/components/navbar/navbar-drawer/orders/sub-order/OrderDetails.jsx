
import React, { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Data from "../../../../../services/Api";
import { Carousel } from 'antd';
import OrderItemDetails from "./OrderItemDetails";


export default function OrderDetails({ showOrder, isOrderLoading, setIsOrderLoading }) {


    let api = new Data();

    let [noDetails, setNoDetails] = useState(true)

    let [details, setDetails] = useState();



    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#095ee6',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#095ee6',
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };


    let retrieveDetails = async () => {

        let x = await api.getOrderDetailsByOrderId(showOrder);
        if (x.info) {
            setNoDetails(true)
            setIsOrderLoading(false)
        } else {
            setNoDetails(false)
            setIsOrderLoading(false)
            let arr = []


            function toBase64(data) {
                let binary = '';
                const bytes = new Uint8Array(data);
                const len = bytes.byteLength;
                for (let i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                return btoa(binary);
            }

            setDetails(x);
        }
    }



    useEffect(() => {

        if (showOrder) {
            retrieveDetails();

        }

    }, [showOrder])










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


                                <div className=" w-full h-[100%]">
                                    <Carousel afterChange={onChange} dots={{ className: 'custom-dots' }}>
                                        {
                                            details.map(element => {
                                                return (




                                                    <OrderItemDetails element={element} key={element.id} />



                                                )
                                            })
                                        }

                                    </Carousel>
                                </div>


                        }
                    </>
            }


        </>
    )


}