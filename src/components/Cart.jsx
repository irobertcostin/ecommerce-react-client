import { useContext, useEffect, useState, useRef } from "react"
import { ContextCart } from "../context/ContextCart"
import CartRow from "./CartRow";
import { totalAmount, totalAmountItems } from "../services/CartUtils";
import Data from "../services/Api";
import { ContextUser } from "../context/ContextCustomers";
import Cookies from 'js-cookie';




export default function Cart({ setOpen, setTotalCartObj }) {

    let [cart, setCart] = useContext(ContextCart);

    let [user, setUser] = useContext(ContextUser);

    // how to use ref 
    let [totalCartPrice, setTotalCartPrice] = useState();


    let onClose = () => {
        setOpen(false);

    };


    let api = new Data();



    let checkout = async () => {
        await api.newCart(cart, user.user.customerId)
        setCart([]);
        Cookies.set("authenticatedUserCart", JSON.stringify(cart));
    }




    useEffect(() => {

    }, [cart])


    useEffect(() => {

        if (cart.length > 0) {
            setTotalCartPrice(totalAmount(cart))
            console.log(setTotalCartObj);
        }


    }, [cart.length])





    return (


        <>


            <div className="w-full h-[40vh] md:h-[60vh] overflow-y-scroll">
                <ul role="list" className="-my-6 divide-y divide-gray-200 px-4 pt-2">
                    {
                        cart &&
                        cart.map(item => (
                            <CartRow item={item} key={item.id} setTotalCartPrice={setTotalCartPrice} />
                        ))
                    }
                </ul>
            </div>





            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalCartPrice}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <>
                    {
                        totalCartPrice > 0 ?
                            <>
                                <div className="mt-6 w-full flex justify-center">
                                    <button onClick={checkout} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-950 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#ccff00] hover:text-black duration-300 ease-in-out">Checkout</button>
                                </div>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        or
                                        <button onClick={onClose} type="button" className="font-medium ml-2 text-indigo-950 hover:text-indigo-500">
                                            Continue Shopping
                                            <span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </p>
                                </div>
                            </>
                            :


                            <div className="mt-6 flex justify-center">
                                <button onClick={onClose} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-950 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#ccff00] hover:text-black duration-300 ease-in-out">Continue shopping</button>
                            </div>
                    }
                </>
            </div>
        </>


    )
}


