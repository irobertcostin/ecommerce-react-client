import React, { useState, useContext, useEffect } from "react"

import ProductPhoto from "./images/Product-Photo.jpg"
import { useNavigate } from "react-router-dom";

import Data from "../services/Api";
import DotLoader from "react-spinners/DotLoader";





export default function Products() {


    let navigate = useNavigate();

    let [products, setProducts] = useState("")


    let getProducts = async () => {
        let api = new Data();
        let prod = await api.getProducts();



        function toBase64(data) {
            let binary = '';
            const bytes = new Uint8Array(data);
            const len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        }



        let x = prod;

        x.forEach(element => {
            element.picture = `data:image/png;base64,${toBase64(element.picture.data)}`
        });


        setProducts(x)


    }




    let goToProduct = (element) => {


        navigate(`/product/${element.target.id}`)

    }





    useEffect(() => {

        getProducts()

    }, [])







    return (
        <>
            {
                products.length == 0
                    ?
                    <div className='w-full min-h-[80vh] flex justify-center items-center'>
                        <DotLoader color="#CCFF00" />
                    </div>
                    :
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">Products</h2>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                                {
                                    products &&
                                    products.map((product) => (
                                        <div key={product.id} className="group">
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img
                                                    src={product.picture}
                                                    id={product.id}
                                                    // alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer"
                                                    onClick={goToProduct}
                                                />
                                            </div>
                                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">$ {product.price}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}