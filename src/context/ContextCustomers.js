import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { message } from "antd";



export const ContextUser = createContext();


export const UserProvider = ({ children }) => {



    const [user, setUser] = useState();



    useEffect(() => {
        console.log(user);
        setUser(user)

    }, [user])


    return (
        <ContextUser.Provider value={[user, setUser]}>{children}</ContextUser.Provider>
    )


}