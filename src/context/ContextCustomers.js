import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';




export const ContextUser = createContext();


export const UserProvider = ({ children }) => {



    const [user, setUser] = useState();



    useEffect(() => {

        if (Cookies.get("authenticatedUser")) {
            setUser(JSON.parse(Cookies.get("authenticatedUser")));
        }



    }, [])


    return (
        <ContextUser.Provider value={[user, setUser]}>{children}</ContextUser.Provider>
    )


}