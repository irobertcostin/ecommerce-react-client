import { useContext, useEffect, useState, useRef } from "react"
import { ContextUser } from "../context/ContextCustomers";
import Data from "../services/Api";
import DotLoader from "react-spinners/DotLoader";
import OrderDetails from "./OrderDetails";



export default function Orders() {


    let [userOrders, setUserOrders] = useState([]);

    let [user, setUser] = useContext(ContextUser);

    let api = new Data();

    let [showOrder, setShowOrder] = useState();
    let [isOrderLoading, setIsOrderLoading] = useState(false);


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

    useEffect(() => {

        console.log(showOrder);

    }, [showOrder])

    useEffect(() => {

        // console.log(showOrder);

    }, [isOrderLoading])





    return (


        <>


            <div className="w-full h-[45vh] md:h-[49vh] overflow-y-scroll">
                <ul role="list" className="-my-6 divide-y divide-gray-200 px-4 pt-12">
                    {
                        userOrders &&
                        userOrders.map(item => (
                            <li key={item.id} onClick={() => { setShowOrder(item.id); setIsOrderLoading(true) }} className="w-full flex justify-between items-center px-2 py-2 cursor-pointer">
                                <p>Order id: {item.id}</p>
                                <p>Value: ${item.amount}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>





            <div className=" h-[28vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center items-center">
                {
                    !showOrder
                        ?
                        <div className="w-full text-center ">
                            <p className="text-[12px]">Select an order to display</p>
                        </div>
                        :
                        <OrderDetails showOrder={showOrder} setIsOrderLoading={setIsOrderLoading} isOrderLoading={isOrderLoading} />
                }
            </div>
        </>


    )
}


