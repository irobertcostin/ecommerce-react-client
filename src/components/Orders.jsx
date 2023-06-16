import { useContext, useEffect, useState, useRef } from "react"
import { ContextUser } from "../context/ContextCustomers";
import Data from "../services/Api";




export default function Orders() {


    let [userOrders, setUserOrders] = useState([])

    let [user, setUser] = useContext(ContextUser)

    let api = new Data();



    let checkOrders = async () => {


        let orders = await api.getOrders()

        console.log(orders);
        console.log(user.user.customerId);
        // console.log(user);
        let x = orders.filter(e => e.customer_id == user.user.customerId)
        setUserOrders(x);


    }



    useEffect(() => {

        checkOrders();

    }, [])





    return (


        <>


            <div className="w-full h-[60vh] overflow-y-scroll">
                <ul role="list" className="-my-6 divide-y divide-gray-200 px-4 pt-12">
                    {
                        userOrders &&
                        userOrders.map(item => (
                            <li key={item.id} className="w-full flex justify-between items-center px-2 py-2 cursor-pointer">
                                <p>Order id: {item.id}</p>
                                <p>Value: ${item.amount}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>




            {/*             
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
                                <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-950 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#ccff00] hover:text-black duration-300 ease-in-out">Continue shopping</button>
                            </div>
                    }
                </>
            </div> */}
        </>


    )
}


