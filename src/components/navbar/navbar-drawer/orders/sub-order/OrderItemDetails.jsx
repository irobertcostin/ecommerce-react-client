
import React, { useEffect, useState } from "react";
import Data from "../../../../../services/Api";
import { DotLoader } from "react-spinners";



export default function OrderItemDetails({ element }) {


    let api = new Data();



    let [item, setItem] = useState();

    function toBase64(data) {
        let binary = '';
        const bytes = new Uint8Array(data);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }


    let retrieveProduct = async (id) => {
        let obj = await api.getProductsById(id)
        return obj;
    }


    let changeDetails = async (element) => {

        let newEl = {
            id: element.id,
            price: element.price,
            quantity: element.quantity,
            product_id: element.product_id,
            order_id: element.order_id,
            product_pic: ""
        }



        let x = await retrieveProduct(element.product_id)



        newEl.product_pic = `data:image/png;base64,${toBase64(x.picture.data)}`

        setItem(newEl)
    }




    useEffect(() => {


        if (element) {
            changeDetails(element);

        }

    }, [element])






    return (
        <>
            {
                !item
                    ?
                    <></>
                    :

                    <>

                        <div key={item.product_id} className=" mt-2 relative  flex flex-col justify-center items-center ">
                            <div className="flex justify-between w-full px-10 py-2  text-xs absolute top-0">

                                <div className="">
                                    <p>Order id {item.order_id}</p>
                                    <p>Product id {item.product_id}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>Price ${item.price}</p>
                                    <p>Quantity {item.quantity}</p>

                                </div>

                            </div>
                            <img className=" mt-8 pb-2 mx-auto" src={item.product_pic} alt="missing image" ></img>



                        </div>
                    </>
            }
        </>

    )
}

