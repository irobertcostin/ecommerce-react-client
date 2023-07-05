import Navbar from "../navbar/Navbar"
import Products from "../products/Products"
import fraser from "../images/frasers-plus-min.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'


export default function Home() {

    let navigate = useNavigate();


    let goToProducts = () => {


        navigate(`/gallery`)

    }








    return (
        <div className="flex flex-col">


            <div className="home-comm h-[470px] w-full flex flex-col justify-end items-center">
                <div className="w-[200px] md:w-[300px] mb-8 text-center pb-2 border-b-4 border-[#CCFF00]">
                    <p className="text-white text-lg font-extrabold mb-2">THIS IS</p>
                    <p className="home-comm-label text-white text-4xl font-extrabold">HOT GIRL SUMMER</p>
                </div>

                <div>
                    <button onClick={goToProducts} className=" mb-12 bg-white px-6 py-3 rounded-sm font-bold">DISCOVER VARIETY</button>
                </div>

            </div>

            <div className="w-full mt-4 mb-10 bg-gradient-to-r from-black to-indigo-900 h-[200px] md:justify-center md:items-center flex justify-between">
                <div className="text-white px-4 py-2  flex flex-col">
                    <p className="text-2xl"><span className="font-extrabold text-2xl">FRASER</span>PLUS</p>
                    <p className="font-extrabold text-xl w-[200px]">Buy now. Pay later. Earn Rewards</p>
                    <div className="text-xs">
                        <p>Credit subject to status</p>
                        <p>Representative APR: 39.9% (variable)</p>
                    </div>




                    <div className=" flex justify-center mt-2  rounded-sm">
                        <a href="https://www.houseoffraser.co.uk/frasersplus" target="_blank">
                            <button className="px-6 py-3 font-extrabold border w-full bg-fuchsia-700  hover:bg-[#CCFF00] hover:text-black ease-in-out duration-300" >LEARN MORE</button>
                        </a>
                    </div>
                </div>


                <div className="w-48 relative">
                    <img src={fraser}></img>
                </div>
            </div>



            <div className="relative isolate overflow-hidden bg-indigo-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our Newsletter for Exclusive Benefits and Updates!</h2>

                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Weekly promos</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Get ready for amazing weekly promos! Unbeatable discounts and special offers await in our exclusive newsletter.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Only important headlines</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Only important headlines delivered straight to your inbox for quick updates.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>



        </div>
    )
}