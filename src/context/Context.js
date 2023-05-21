import { createContext, useState } from "react";
import Data from "../services/Api";




export const Context = createContext();


export const ModelsProvider = ({ children }) => {



    const [products, setProducts] = useState([]);

    let x;

    if (products.length === 0) {



        let api = new Data();

        api.getProducts().then(response => {
            setProducts(response)

        })


        api.getCustomers().then(response => {
            x.push(response)

        })

        // setProducts(x);

    }



    return (
        <Context.Provider value={[products, setProducts]}>{children}</Context.Provider>
    )


}