import { useState, useEffect, useContext } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import Data from '../services/Api'
import DotLoader from "react-spinners/ClipLoader";
import { ContextCart } from '../context/ContextCart'
import Cookies from "js-cookie";
import { addCart, eraseCart, totalAmountItems } from "../services/CartUtils";
import base64 from "base-64"



export default function Product({ setTotalCartObj }) {

    let [myProduct, setMyProduct] = useState()

    let [cart, setCart] = useContext(ContextCart)

    let [prodPic, setProdPic] = useState("");

    let id = useParams().id

    let api = new Data();

    let getProdById = async () => {

        let data = await api.getProducts()

        let x = data.filter(e => e.id == id)
        // console.log(x[0]);
        setMyProduct(x[0]);


        function toBase64(data) {
            let binary = '';
            const bytes = new Uint8Array(data);
            const len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        }


        setProdPic(`data:image/png;base64,${toBase64(x[0].picture.data)}`);



    }


    let addToCart = () => {


        let item = {

            id: myProduct.id,
            name: myProduct.name,
            price: myProduct.price,
            url: myProduct.url,
            quantity: 1
        }



        let check = false;



        if (cart.length > 0) {

            cart.forEach(element => {


                if (element.id == myProduct.id) {
                    check = true;

                    element.quantity = element.quantity + item.quantity;
                    setCart(cart)
                    setTotalCartObj(totalAmountItems(cart))
                    Cookies.set("authenticatedUserCart", JSON.stringify(cart));

                }
            });


            if (check === false) {

                cart.push(item)
                setCart(cart)
                Cookies.set("authenticatedUserCart", JSON.stringify(cart));
                setTotalCartObj(totalAmountItems(cart))
            }

        } else {


            cart.push(item)
            setCart(cart)
            Cookies.set("authenticatedUserCart", JSON.stringify(cart));
            setTotalCartObj(totalAmountItems(cart))
        }




    }








    useEffect(() => {






    }, [myProduct]);


    useEffect(() => {
        setTotalCartObj(totalAmountItems(cart))
    }, [cart])


    useEffect(() => {
        getProdById()

    }, [])




    return (
        <>
            {
                !myProduct ? <div className='w-full min-h-[80vh] flex justify-center items-center'>
                    <DotLoader color="#CCFF00" />
                </div> :
                    <div className="bg-white md:min-h-[70.7vh]  lg:min-h-[74.45vh]">
                        <div className="pt-6">
                            {/* Image gallery */}
                            <div className="mx-auto mt-6 max-w-sm sm:px-6 lg:grid lg:max-w-md  lg:gap-x-8 lg:px-8">
                                <div className="aspect-h-4 aspect-w-4 lg:aspect-h-4 lg:aspect-w-4 sm:overflow-hidden sm:rounded-lg">
                                    <img
                                        src={prodPic}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Product info */}
                            <div className="mx-auto max-w-md px-4 pb-16 pt-6 sm:px-6  lg:max-w-md lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                                <div className="lg:col-span-2  lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{myProduct.name}</h1>
                                </div>
                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-xl tracking-tight text-gray-900">$ {myProduct.price}</p>

                                    <button
                                        onClick={addToCart}
                                        className="mt-6 mb flex w-full items-center justify-center rounded-md border border-transparent bg-[#CCFF00]  px-8 py-3 text-base font-medium text-black  focus:outline-none focus:ring-2 focus:ring-indigo-950 focus:ring-offset-2"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )

}