import { useContext, useEffect, useState, useRef } from "react"
import { ContextUser } from "../../../../context/ContextCustomers";
import Data from "../../../../services/Api";

import OrderDetails from "./sub-order/OrderDetails";
import { Button, Empty } from 'antd';







export default function Orders() {


    let [userOrders, setUserOrders] = useState([]);

    let [user, setUser] = useContext(ContextUser);

    let api = new Data();

    let [showOrder, setShowOrder] = useState();
    let [isOrderLoading, setIsOrderLoading] = useState(false);


    let checkOrders = async () => {


        let orders = await api.getOrdersByCustomerId(user.user.customerId)

        setUserOrders(orders);


    }





    useEffect(() => {

        checkOrders();

    }, [])



    return (


        <>


            <div className="w-full min-h-[30vh] border  md:h-[30vh] pt-8 overflow-y-scroll">
                <ul role="list" className="-my-6 divide-y divide-gray-200 px-4 pt-4">
                    {
                        userOrders
                            ?
                            <>
                                {

                                    userOrders.map(item => (
                                        <li key={item.id} onClick={() => { setShowOrder(item.id); setIsOrderLoading(true) }} className="w-full flex justify-between items-center px-2 py-2 cursor-pointer">
                                            <p>Order id: {item.id}</p>
                                            <p>Value: ${item.amount}</p>
                                        </li>
                                    ))
                                }
                            </>
                            :
                            <Empty
                                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                                imageStyle={{ height: 200 }}
                                description={
                                    <span>
                                        No orders
                                    </span>
                                }
                            >

                            </Empty>
                    }
                </ul>
            </div>




            <>
                {
                    userOrders
                        ?
                        <>
                            <div className=" md:mt-12 flex justify-center items-center">
                                {
                                    !showOrder
                                        ?
                                        <div className="w-full text-center mt-24">
                                            <p className="text-[12px]">Select an order to display</p>
                                        </div>
                                        :
                                        <OrderDetails showOrder={showOrder} setIsOrderLoading={setIsOrderLoading} isOrderLoading={isOrderLoading} />
                                }
                            </div>
                        </>
                        :
                        <></>

                }
            </>


        </>


    )
}


