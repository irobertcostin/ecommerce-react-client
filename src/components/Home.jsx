import Navbar from "./Navbar"
import Products from "./Products"
import fraser from "./images/frasers-plus-min.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export default function Home() {

    let navigate = useNavigate();


    let goToProducts = () => {


        navigate(`/gallery`)

    }








    return (
        <>


            <div className="home-comm h-[470px] w-full flex flex-col justify-end items-center">
                <div className="w-[200px] md:w-[300px] mb-8 text-center pb-2 border-b-4 border-[#CCFF00]">
                    <p className="text-white text-lg font-extrabold mb-2">THIS IS</p>
                    <p className="home-comm-label text-white text-4xl font-extrabold">HOT GIRL SUMMER</p>
                </div>

                <div>
                    <button onClick={goToProducts} className=" mb-12 bg-white px-6 py-3 rounded-sm font-bold">DISCOVER VARIETY</button>
                </div>

            </div>

            <div className="w-full bg-gradient-to-r from-black to-indigo-900 mt-4 h-[200px] md:justify-center md:items-center flex justify-between">
                <div className="text-white px-4 py-2  flex flex-col">
                    <p className="text-2xl"><span className="font-extrabold text-2xl">FRASER</span>PLUS</p>
                    <p className="font-extrabold text-xl w-[200px]">Buy now. Pay later. Earn Rewards</p>
                    <div className="text-xs">
                        <p>Credit subject to status</p>
                        <p>Representative APR: 39.9% (variable)</p>
                    </div>

                    <div className=" flex justify-center mt-2  rounded-sm">
                        <button className="px-6 py-3 font-extrabold border w-full bg-fuchsia-700  hover:bg-[#CCFF00] hover:text-black ease-in-out duration-300" >LEARN MORE</button>
                    </div>
                </div>


                <div className="w-48 relative">
                    <img src={fraser}></img>
                </div>
            </div>




        </>
    )
}