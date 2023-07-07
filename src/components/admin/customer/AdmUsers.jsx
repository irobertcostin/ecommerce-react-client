import { useState, useEffect } from "react";
import Data from "../../../services/Api"
import AdmUsersRow from "./AdmUsersRow";
import DotLoader from "react-spinners/DotLoader";
import { Input } from 'antd';







export default function AdmUsers() {

    const { Search } = Input;


    let [searchFor, setSearchFor] = useState();
    let [isSearchActive, setIsSearchActive] = useState(false)

    const onSearch = (value) => {

        setSearchFor(value.target.value);

    }


    let [allUsers, setAllUsers] = useState();
    let [searchResults, setSearchResults] = useState();

    let api = new Data();


    let retrieveUsers = async () => {

        let data = await api.getCustomers();

        setAllUsers(data);

    }




    let returnResults = () => {





    }







    useEffect(() => {
        retrieveUsers()

    }, [!allUsers])




    return (
        <>
            <div className="w-full  p-4 flex items-center gap-10">

                <p className="text-xl">Search for a customer</p>

                <Search
                    placeholder="Type in ..."
                    onChange={onSearch}
                    style={{
                        width: 300,
                        padding: ""

                    }}
                    size="large"
                    type="textarea"
                    allowClear
                    className="flex items-center justify-center"
                />






            </div>

            <ul role="list" className="divide-y divide-gray-100 md:py-11">
                {
                    allUsers && !isSearchActive
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

                {
                    isSearchActive
                        ?
                        <></>
                        :
                        <></>
                }
            </ul>

        </>
    )
}