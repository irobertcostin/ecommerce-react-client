import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";


export const ContextCart = createContext();


export const CartProvider = ({ children }) => {



    const [cart, setCart] = useState({ cart: [] });



    useEffect(() => {

        if (Cookies.get("authenticatedUserCart")) {
            setCart(JSON.parse(Cookies.get("authenticatedUserCart")));
            console.log(JSON.parse(Cookies.get("authenticatedUserCart")));
        }

        // console.log(cart);

    }, [])


    return (
        <ContextCart.Provider value={[cart, setCart]}>{children}</ContextCart.Provider>
    )


}