import React, { useState, useEffect } from "react"
import pic from "../../images/favicon.ico.png"
import { Button, Space } from 'antd';

import { useNavigate } from "react-router-dom";




export default function AdmUsersRow({ person }) {

    let navigate = useNavigate();


    let edit = () => {

        navigate(`/admin/customers/${person.id}`)
        // console.log(person.id);

    }



    return (
        <>
            {
                person
                &&
                <li key={person.id} className="flex  px-2 justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={pic} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{person.full_name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="" onClick={edit}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                        </button>
                    </div>
                </li>
            }
        </>
    )
}