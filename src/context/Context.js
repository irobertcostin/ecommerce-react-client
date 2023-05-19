import { createContext, useState } from "react";
import Data from "../services/Api";




export const Context = createContext();


export const ModelsProvider = ({ children }) => {



    const [products, setProducts] = useState([]);



    if (products.length === 0) {


        let api = new Data();

        api.getProducts().then(response => {
            setProducts(response);

        })

    }



    return (
        <Context.Provider value={[products, setProducts]}>{children}</Context.Provider>
    )


}