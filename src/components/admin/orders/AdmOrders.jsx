import { useState, useEffect } from "react";
import Data from "../../../services/Api"
import DotLoader from "react-spinners/DotLoader";
import AdmOrdersRow from "./AdmOrdersRow";




export default function AdmOrders() {

    let [allOrders, setAllOrders] = useState();

    let api = new Data();


    let retrieveOrders = async () => {

        let data = await api.getOrders();
        console.log(data);
        setAllOrders(data);

    }





    useEffect(() => {
        retrieveOrders()

    }, [!allOrders])




    return (
        <>


            <ul role="list" className="divide-y divide-gray-100 max-h-[52vh] overflow-y-scroll md:py-11">
                {
                    allOrders
                        ?


                        allOrders.map((order) => (
                            <AdmOrdersRow key={order.id} order={order}></AdmOrdersRow>
                        ))

                        :
                        (
                            <div className='w-full min-h-[80vh] flex justify-center items-center'>
                                <DotLoader color="#CCFF00" />
                            </div>
                        )

                }
            </ul>
        </>
    )
}