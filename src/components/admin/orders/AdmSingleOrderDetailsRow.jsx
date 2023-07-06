import React, { useState, useEffect } from "react"


export default function AdmSingleOrderDetailsRow({ element }) {

    let [detail, setDetail] = useState();







    useEffect(() => {

        console.log(element);

    }, [])



    return (
        <>
            <li key={element.id} className="flex gap-x-6 py-5">
                <div className="flex gap-x-4 items-center w-full md:justify-center">
                    <p className="text-sm leading-6 text-gray-900">Detail ID: {element.id}</p>
                    <p className="text-sm leading-6 text-gray-900">Product ID: {element.product_id}</p>
                    <p className="text-sm leading-6 text-gray-900"> Price: <span className="font-bold text-green-600">$</span> {element.price}</p>
                    <p className="text-sm leading-6 text-gray-900"> Quantity: {element.quantity}</p>
                </div>

            </li>
        </>
    )

}