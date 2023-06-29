
import React, { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Data from "../services/Api";
import { ClimbingBoxLoader } from "react-spinners";



export default function OrderDetails({ showOrder, isOrderLoading, setIsOrderLoading }) {


    let api = new Data();

    let [noDetails, setNoDetails] = useState(true)

    let [details, setDetails] = useState();



    let retrieveProducts = async (id) => {
        let obj = await api.getProductsById(id)
        return obj;
    }





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


            x.forEach(element => {
                let newEl = {
                    id: element.id,
                    price: element.price,
                    quantity: element.quantity,
                    product_id: element.product_id,
                    order_id: element.order_id,
                    product_pic: ""
                }
                retrieveProducts(element.product_id)
                    .then(
                        element2 => {

                            function toBase64(data) {
                                let binary = '';
                                const bytes = new Uint8Array(data);
                                const len = bytes.byteLength;

                                for (let i = 0; i < len; i++) {
                                    binary += String.fromCharCode(bytes[i]);
                                }
                                return btoa(binary);
                            }

                            newEl.product_pic = `data:image/png;base64,${toBase64(element2.picture.data)}`


                        }
                    )
                arr.push(newEl)
            });
            setDetails(arr);
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


                                <div className=" w-full h-[100%] flex overflow-x-scroll">

                                    {
                                        details.map(element => {





                                            return (
                                                <div key={element.product_id} className="  min-w-[28vh] ml-5  flex flex-col justify-center items-center">

                                                    <img className=" w-48  mx-auto h-44  mb-4" src={element.product_pic} alt="missing image" ></img>

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