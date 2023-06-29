import { useState, useEffect, useContext, useRef } from "react"
import DotLoader from "react-spinners/DotLoader";
import { eraseCart, increaseAmount, decreaseAmount, totalAmountItems, totalAmount } from "../services/CartUtils";
import { ContextCart } from "../context/ContextCart";
import Cookies from "js-cookie";
import { initPickerPanelToken } from "antd/es/date-picker/style";


export default function CartRow(item) {


    let [prod, setProd] = useState(item);
    let [cart, setCart] = useContext(ContextCart);
    let [itemAmo, setItemAmo] = useState();



    let getProd = () => {
        setProd(item)
        setItemAmo(item.item.quantity)
    }


    let removeItem = () => {

        if (cart.length === 1) {
            setCart([])
            Cookies.remove("authenticatedUserCart");
        } else if (cart.length > 1) {
            let x = eraseCart(cart, prod.item);
            setCart(x)
            Cookies.set("authenticatedUserCart", JSON.stringify(x));
            // setTotalCartPrice(totalAmount(cart))
        }

    }


    let increase = () => {

        increaseAmount(item.item)

        setCart(cart);
        setItemAmo(item.item.quantity)
        Cookies.set("authenticatedUserCart", JSON.stringify(cart));
        // setTotalCartPrice(totalAmount(cart))


    }

    let decrease = () => {
        decreaseAmount(item.item)
        setCart(cart);
        setItemAmo(item.item.quantity)
        Cookies.set("authenticatedUserCart", JSON.stringify(cart));
        // setTotalCartPrice(totalAmount(cart))
    }


    useEffect(() => {
        getProd();
        console.log(cart);
    }, [item])







    return (
        <>
            {
                prod.item ?
                    <li className="flex py-6 " key={prod.item.id}>
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
                            <img src={prod.item.url}></img>
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <div className="flex justify-between font-medium text-sm text-gray-900">
                                    <h3>
                                        <p>{prod.item.name}</p>
                                    </h3>
                                    <p className="ml-4">${prod.item.price}</p>
                                </div>
                                {/* <p className="mt-1 text-sm text-gray-500">Blue</p> */}
                            </div>
                            <div className="flex flex-1  items-end justify-between text-sm gap-0">



                                <p className="text-gray-500 ">Amount:</p>
                                <button onClick={decrease} className=" w-4 h-[22px] text-center ">-</button>
                                <p className="">{
                                    itemAmo
                                }</p>
                                <button onClick={increase} className=" w-4 h-[22px] text-center">+</button>

                                <div onClick={removeItem} className="flex">
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
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