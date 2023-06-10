import { useState, useEffect, useContext } from "react"
import DotLoader from "react-spinners/DotLoader";
import { eraseCart } from "../services/CartUtils";
import { ContextCart } from "../context/ContextCart";
import Cookies from "js-cookie";


export default function CartRow(item) {


    let [prod, setProd] = useState();
    let [cart, setCart] = useContext(ContextCart);

    let getProd = () => {
        setProd(item)
    }


    let removeItem = () => {

        if (cart.length === 1) {
            setCart("")
            Cookies.remove("authenticatedUserCart");
        } else if (cart.length > 1) {
            let x = eraseCart(cart, prod.item);
            setCart(x)
            Cookies.set("authenticatedUserCart", JSON.stringify(x));
        }

    }


    useEffect(() => {
        getProd();

    }, [prod])


    useEffect(() => {
        // console.log(cart);

    }, [cart])



    return (
        <>
            {
                prod ?
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
                            <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Amount: {prod.item.quantity}</p>

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