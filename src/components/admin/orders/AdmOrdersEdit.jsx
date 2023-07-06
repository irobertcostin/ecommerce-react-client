import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../../../services/Api";



export default function AdmOrdersEdit() {

    let id = useParams().id





    let api = new Data();


    let retrieveOrderById = async (id) => {

        let data;


    }


    useEffect(() => {

        // retrieveDetails(id)

    }, [id])




    return (
        <div className="w-full border-2 border-red-500">

        </div>
    )

}