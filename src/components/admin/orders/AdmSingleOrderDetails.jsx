import React, { useState, useEffect } from "react";
import Data from "../../../services/Api";
import AdmSingleOrderDetailsRow from "./AdmSingleOrderDetailsRow";




export default function AdmSingleOrderDetails({ id }) {



    let api = new Data();


    let [details, setDetails] = useState();



    let retrieveDetails = async (id) => {


        let data = await api.getOrderDetailsByOrderId(id);
        setDetails(data)


    }




    useEffect(() => {

        retrieveDetails(id)

    }, [id])







    return (
        <ul role="list" className="divide-y divide-gray-100 border border-indigo-400 p-4 mt-4">
            {
                details &&
                details.map((element) => {

                    return <AdmSingleOrderDetailsRow key={element.id} element={element} />

                })
            }
        </ul>
    )
}