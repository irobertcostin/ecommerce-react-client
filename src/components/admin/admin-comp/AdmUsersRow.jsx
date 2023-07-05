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
                        <Button type="primary" onClick={edit} className="bg-indigo-800">Edit</Button>
                    </div>
                </li>
            }
        </>
    )
}