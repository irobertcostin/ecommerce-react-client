import { useState, useEffect } from "react";
import Data from "../../../services/Api"
import AdmUsersRow from "./AdmUsersRow";
import DotLoader from "react-spinners/DotLoader";







export default function AdmUsers() {

    let url = ""


    let [allUsers, setAllUsers] = useState();

    let api = new Data();


    let retrieveUsers = async () => {

        let data = await api.getCustomers();
        console.log(data);
        setAllUsers(data);

    }



    useEffect(() => {
        retrieveUsers()

    }, [!allUsers])




    return (
        <>
            <ul role="list" className="divide-y divide-gray-100 md:py-11">
                {
                    allUsers
                        ?


                        allUsers.map((person) => (
                            <AdmUsersRow key={person.id} person={person}></AdmUsersRow>
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