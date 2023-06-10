import { createContext, useState, useEffect } from "react";
import Data from "../services/Api";



export const ContextProducts = createContext();


export const ProductsProvider = ({ children }) => {



    const [products, setProducts] = useState();


    // if (products.length == 0 || products === undefined) {
    //     console.log("aici");
    //     let api = new Data();
    //     api.getProducts().then(response => {
    //         setProducts(response);
    //     })

    // }





    useEffect(() => {
        // if (products.length === 0) {

        //     let api = new Data();
        //     api.getProducts().then(response => {
        //         setProducts(response);
        //     })

        // }
        console.log(products);

    }, [products])


    return (
        <ContextProducts.Provider value={[products, setProducts]}>{children}</ContextProducts.Provider>
    )


}