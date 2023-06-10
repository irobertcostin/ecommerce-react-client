import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { addCart, eraseCart } from "../services/CartUtils";

export const ContextCart = createContext();


export const CartProvider = ({ children }) => {



    const [cart, setCart] = useState([]);



    useEffect(() => {

        if (Cookies.get("authenticatedUserCart")) {
            setCart(JSON.parse(Cookies.get("authenticatedUserCart")));
            // console.log(JSON.parse(Cookies.get("authenticatedUserCart")));

            let x = JSON.parse(Cookies.get("authenticatedUserCart"));

        }

        // console.log(cart);

    }, [])


    return (
        <ContextCart.Provider value={[cart, setCart]}>{children}</ContextCart.Provider>
    )


}