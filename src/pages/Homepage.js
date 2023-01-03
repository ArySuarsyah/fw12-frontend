import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movielist from "./components/Movielist";


import { BsSearch } from "react-icons/bs";





import { useSelector } from "react-redux";
import SignIn from "./SignIn";





const Homepage = () => {


    const token = useSelector((state) => state.auth.token)






    const navigate = useNavigate()
    const view = () => {
        { token ? navigate('/view') : navigate('/sign-in') } 
    }
    return (
        <div className="mt-0 pt-0 font-mulish">
            <Header nav1="Home" nav2="List Movie" />
            <div className="relative flex ml-5">
                <div className="relative flex md:hidden lg:hidden">
                    <input type="text" className="border-2 h-11 outline-none rounded m-auto pl-14 pr-2 w-full box-border" placeholder="Search Movie Name" />
                    <BsSearch className="absolute w-[1.5em] h-[1.5em] top-1 left-[15px] m-2" />
                </div>
            </div>
            <section className="grid md:grid-cols-2 pt-10 bg-white">
                <aside className="flex flex-col justify-center items-center text-blue-700 font-semibold gap-5">
                    <span className="text-xl text-slate-400">
                        Nearest Cinema, Newest Movie,
                    </span>
                    <span className="text-5xl font-bold">
                        Find out now!
                    </span>
                </aside>
                <aside className="flex justify-center items-center">
                    <img src={require('../Assets/Image/image2.png')} alt="" className="w-9/12" />
                </aside>
            </section>
            <section>
                <div className="flex flex-row text-blue-700 justify-between bg-white my-5 font-semibold cursor-pointer px-5 md:px-14">
                    <div>
                        <span className="hover:scale-[1.1] drop-shadow-xl cursor-pointer">Now Showing</span>
                        <hr className="h-3px] w-20 rounded rounded-l-50 rounded-r-50 bg-blue-600 m-auto" />
                    </div>
                    <span onClick={view} className="hover:scale-[1.1]  drop-shadow-xl cursor-pointer">view all</span>
                </div>
                <Movielist />
                {/* <div className="inline-block p-8 m-3 w-[13rem]  rounded border-2 border-[#dedede] bg-neutral-100 relative overflow-y-hidden text-center movieParent">
                        <img src={picture} alt={movies.title} className="w-40 rounded m-auto" />
                        <div className="grid grid-rows-3 grid grid-rows-[1fr_minmax(90px,_1fr)_0px]">
                            <div className="flex justify-center items-center font-bold text-[14px] w-40 text-center h-20 whitespace-normal m-auto">
                            {movies.title}
                            </div>
                            <div>
                                <span className=">
                                    genre
                                </span>
                            </div>
                            <div className="self-end">
                                <button className= border-[1px] rounded border-blue-600 w-40 h-9 text-sm text-blue-500 bg-[#dedede]">Detail</button>
                            </div>
                        </div>
                    </div> */}
            </section>
            <section>
                <div className="flex flex-row text-blue-700 justify-between bg-white my-5 font-semibold cursor-pointer px-5 md:px-14">
                    <div>
                        <span className="text-lg hover:scale-[1.1] drop-shadow-xl cursor-pointer text-black">Upcoming Movies</span>
                    </div>
                    <span onClick={view} className="text-sm hover:scale-[1.1] drop-shadow-xl cursor-pointer">view all</span>
                </div>
                <div>
                </div>
                <div className="bg-white px-5">
                    <div className="mb-9 overflow-x-scroll">
                        <div className="flex items-center gap-4 h-16 m-auto text-blue-800">
                            <div className="month">January</div>
                            <div className="month">February</div>
                            <div className="month">March</div>
                            <div className="month">April</div>
                            <div className="month">May</div>
                            <div className="month">June</div>
                            <div className="month">July</div>
                            <div className="month">August</div>
                            <div className="month">September</div>
                            <div className="month">October</div>
                            <div className="month">November</div>
                            <div className="month">December</div>
                        </div>
                    </div>
                    <Movielist />
                </div>
            </section>
            <section className="flex flex-col gap-9 justify-center items-center bg-[#fff] drop-shadow-xl h-[30rem] mx-5 my-20 px-2 text-center lg:m-auto lg:w-[50rem] rounded-[4px]">
                <div>
                    <span className="text-[#4E4B66]">Be the vanguard of the</span>
                    <h2 className="text-[#5F2EEA] text-4xl font-bold">Moviegoers</h2>
                </div>
                <div className="flex flex-col items-center gap-5 md:block">
                    <input type="text" className="h-11 border-[2px] border-slate-200 rounded p-2 outline-none" />
                    <span className="w-32 bg-[#5F2EEA] text-white p-3 ml-2 rounded-[4px] hover:scale-[1.05] cursor-pointer">Join now</span>
                </div>
                <p className="lg:w-[28rem] text-[#6E7191] text-[14px]">By joining you as a Tickitz member, we will always send you the latest updates via email.</p>
                <div>
                </div>
            </section>
            <Footer />
        </div>
    )
};


export default Homepage;