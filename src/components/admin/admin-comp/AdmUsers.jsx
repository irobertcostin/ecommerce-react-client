import { useState, useEffect } from "react";
import Data from "../../../services/Api"
import pic from "../../images/favicon.ico.png"










export default function AdmUsers() {

    let url = ""


    let [allUsers, setAllUsers] = useState();

    let api = new Data();


    let retrieveUsers = async () => {

        let data = await api.getCustomers();

        setAllUsers(data);

    }



    useEffect(() => {
        retrieveUsers()

    }, [allUsers])




    return (
        <>
            <ul role="list" className="divide-y divide-gray-100">
                {allUsers.map((person) => (
                    <li key={person.email} className="flex border px-2 justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={pic} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                            {person.lastSeen ? (
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                </p>
                            ) : (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">Online</p>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

        </>
    )
}