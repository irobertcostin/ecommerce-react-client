import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { message } from "antd";



export const ContextUser = createContext();


export const UserProvider = ({ children }) => {



    const [user, setUser] = useState();



    useEffect(() => {

        if (Cookies.get("authenticatedUser")) {
            setUser(JSON.parse(Cookies.get("authenticatedUser")));
            message.success(`Welcome back ${JSON.parse(Cookies.get("authenticatedUser")).user.full_name}`)

        }

    }, [])


    return (
        <ContextUser.Provider value={[user, setUser]}>{children}</ContextUser.Provider>
    )


}