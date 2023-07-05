import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Data from "../../../services/Api";



export default function AdmUsersEdit() {

    let id = useParams().id

    let [customer, setCustomer] = useState();





    let api = new Data();


    let retrieveCustomer = async (id) => {

        // let data = await api.

    }


    useEffect(() => {
        console.log(id);

    }, [!id]);


    return (
        <>
            <div className="w-full border-2 border-indigo-600">

                {

                    customer
                        ?
                        (
                            <></>
                        ) : (


                            <div className='w-full min-h-[80vh] flex justify-center items-center'>
                                <DotLoader color="#CCFF00" />
                            </div>
                        )


                }


            </div>


        </>
    )
}