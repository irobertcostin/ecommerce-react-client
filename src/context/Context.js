import { createContext, useState } from "react";
import Data from "../services/Api";




export const Context = createContext();


export const ModelsProvider = ({ children }) => {



    const [data, setData] = useState([]);



    if (data.length == 0) {


        let api = new Data();


    }



    return (
        <Context.Provider value={[data, setData]}>{children}</Context.Provider>
    )


}