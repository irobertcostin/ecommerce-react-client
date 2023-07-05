import { useState, useEffect, useContext, useRef } from "react"
import DotLoader from "react-spinners/DotLoader";
import { eraseCart, increaseAmount, decreaseCart, totalAmountItems, totalAmount, addCart } from "../../../../utils/CartUtils";
import { ContextCart } from "../../../../context/ContextCart";
import Cookies from "js-cookie";
import { initPickerPanelToken } from "antd/es/date-picker/style";
import { logDOM } from "@testing-library/react";


export default function CartRow({ item, setTotalCartPrice }) {



    let [cart, setCart] = useContext(ContextCart);



    let remove = () => {

        setCart(eraseCart(cart, item))
        setTotalCartPrice(totalAmount(cart))
    }



    let increase = () => {



        setCart(addCart(cart, item));

        setTotalCartPrice(totalAmount(cart))


    }

    let decrease = () => {
        setCart(decreaseCart(cart, item));
        setTotalCartPrice(totalAmount(cart))
    }


    useEffect(() => {
        console.log(item.quantity);
    }, [item.quantity])




    useEffect(() => {
        // console.log(cart);
    }, [cart])


    return (
        <>
            {
                item ?
                    <li className="flex py-6 " key={item.id}>
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
                            <img src={item.url}></img>
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <div className="flex justify-between font-medium text-sm text-gray-900">
                                    <h3>
                                        <p>{item.name}</p>
                                    </h3>
                                    <p className="ml-4">${item.price}</p>
                                </div>
                                {/* <p className="mt-1 text-sm text-gray-500">Blue</p> */}
                            </div>
                            <div className="flex flex-1  items-end justify-between text-sm gap-0">



                                <p className="text-gray-500 ">Amount:</p>
                                <button onClick={decrease} className=" w-4 h-[22px] text-center ">-</button>
                                <p className="">{item.quantity}</p>
                                <button onClick={increase} className=" w-4 h-[22px] text-center">+</button>

                                <div className="flex">
                                    <button onClick={remove} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    :

                    <div className='w-full min-h-[12vh] flex justify-center items-center'>
                        <DotLoader color="#CCFF00" />
                    </div>

            }
        </>
    )
}