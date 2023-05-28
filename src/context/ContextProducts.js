import { createContext, useState, useEffect } from "react";
import Data from "../services/Api";



export const ContextProducts = createContext();


export const ProductsProvider = ({ children }) => {



    const [products, setProducts] = useState();


    if (!products) {

        let api = new Data();
        api.getProducts().then(response => {
            setProducts(response);
        })

    }





    // useEffect(() => {


    // }, [products])


    return (
        <ContextProducts.Provider value={[products, setProducts]}>{children}</ContextProducts.Provider>
    )


}