import React, { Component } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Movielist from "./component/Movielist";

class Homepage extends Component{
    render() {
        return (
            <div className="mt-0 pt-0">
                <Header />
                <section className="grid grid-cols-2 pt-10 font-mulish bg-white">
                    <aside className="flex flex-col justify-center font-mulish items-center text-blue-700 font-semibold gap-5">
                        <span className="text-xl font-mulish text-slate-400">
                            Nearest Cinema, Newest Movie,
                        </span>
                        <span className="text-5xl font-mulish font-bold">
                            Find out now!
                        </span>
                    </aside>
                    <aside className="flex justify-center items-center">
                        <img src={require('../Assets/Image/image2.png')} alt="" className="w-9/12"/>
                    </aside>
                </section>
                <section>
                    <div className="flex flex-row text-blue-700 justify-between bg-white my-5 px-8 font-semibold cursor-pointer px-14">
                        <div>
                            <span className="hover:scale-[1.1] font-mulish drop-shadow-xl cursor-pointer">Now Showing</span>
                            <hr className="h-[font-mulish3px] w-20 rounded rounded-l-50 rounded-r-50 bg-blue-600 m-auto"/>
                        </div>
                        <span className="hover:scale-[1.1] font-mulish drop-shadow-xl cursor-pointer">view all</span>
                    </div>
                    <Movielist />
                    {/* <div className="inline-block p-8 m-3 w-[13rem]  rounded border-2 border-[#dedede] bg-neutral-100 relative overflow-y-hidden text-center movieParent">
                        <img src={picture} alt={movies.title} className="w-40 rounded m-auto" />
                        <div className="grid grid-rows-3 grid grid-rows-[1fr_minmax(90px,_1fr)_0px]">
                            <div className="flex justify-center items-center font-bold text-[14px] font-mulish w-40 text-center h-20 whitespace-normal m-auto">
                            {movies.title}
                            </div>
                            <div>
                                <span className="font-mulish">
                                    genre
                                </span>
                            </div>
                            <div className="self-end">
                                <button className="font-mulish border-[1px] rounded border-blue-600 w-40 h-9 text-sm text-blue-500 bg-[#dedede]">Detail</button>
                            </div>
                        </div>
                    </div> */}
                </section>
                <section>
                    <div className="flex flex-row text-blue-700 justify-between bg-white my-5 px-8 font-semibold cursor-pointer px-14">
                        <div>
                            <span className="font-mulish text-lg hover:scale-[1.1] drop-shadow-xl cursor-pointer text-black">Upcoming Movies</span>
                        </div>
                        <span className="font-mulish text-sm hover:scale-[1.1] drop-shadow-xl">view all</span>
                    </div>
                    <div>
                    </div>
                    <div className="bg-white">
                        <div className="flex gap-4 h-16 w-[75rem] m-auto text-blue-800 w-[77rem] mb-9">
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
                        <Movielist />
                    </div>
                </section>
                <section className="flex flex-col gap-9 justify-center items-center bg-[#fff] drop-shadow-xl w-[50rem] h-[30rem] m-auto mt-20 text-center">
                    <div>
                        <span className="text-[#4E4B66] font-mulish">Be the vanguard of the</span>
                        <h2 className="text-[#5F2EEA] text-4xl font-bold font-mulish">Moviegoers</h2>
                    </div>
                    <div>
                        <input type="text" className="h-11 border-[2px] border-slate-200 rounded p-2 outline-none" />
                        <span className="bg-[#5F2EEA] text-white p-3 m-2 rounded-[4px] hover:scale-[2] cursor-pointer font-mulish">Join now</span>
                    </div>
                    <p className="w-[28rem] text-[#6E7191] text-[14px] font-mulish">By joining you as a Tickitz member, we will always send you the latest updates via email.</p>
                    <div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
};

export default Homepage;