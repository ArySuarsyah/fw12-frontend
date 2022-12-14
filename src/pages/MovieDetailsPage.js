import React, { Component, Fragment } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MovieDetails from "./component/MovieDetails";



class MovieDetailsPage extends Component{
    render() {
        return (
            <Fragment>
                <Header nav1="Home" nav2="List Movie"/>
                <MovieDetails />
                <section className="text-center mt-10">
                    <span className="font-mulish font-bold">Showtimes and Tickets</span>
                    <div className="flex gap-10 justify-center mt-5">
                        <div className="relative">
                            <input type="date" value="2022-12-10" className="font-mulish focus:ring-indigo-500 focus:outline-none date focus:border-indigo-500 border-[1px] rounded-md text-sm py-2 px-3 mt-1 bg-stone-100" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <select id="city" name="city" autocomplete="city-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-stone-100 font-mulish">
                                <option disabled>City</option>
                                <option className="font-mulish">Purwokerto</option>
                                <option className="font-mulish">Jakarta</option>
                                <option className="font-mulish">Bandung</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-3 gap-5 px-5 mt-32">
                    <div className="border-[1px] box-border rounded-md py-3 px-4">
                        <div className="flex gap-5 justify-center items-center">
                            <img src={require('../Assets/Image/ebuId.png')} alt="" className="w-[15rem] h-10"/>
                            <div className="flex flex-col w-full">
                                <span className="font-mulish font-bold text-2xl">ebv.id</span>
                                <span className="font-mulish text-[#6E7191] text-sm" >
                                    Whatever street No.12, South Purwokerto
                                </span>
                            </div>
                        </div>
                        <hr className="w-full mt-4" />
                        <div className="grid grid-cols-4 gap-5 mt-10">
                            <span className="font-mulish text-[14px]">08:30am</span>
                            <span className="font-mulish text-[14px]">10:30pm</span>
                            <span className="font-mulish text-[14px]">12:00pm</span>
                            <span className="font-mulish text-[14px]">02:00pm</span>
                            <span className="font-mulish text-[14px]">04:30pm</span>
                            <span className="font-mulish text-[14px]">07:00pm</span>
                            <span className="font-mulish text-[14px]">08:30pm</span>
                            <span className="font-mulish text-[14px]"></span>
                        </div>
                        <div className="flex justify-between mt-10">
                            <span className="font-mulish">Price</span>
                            <span className="font-mulish">$10.00/seat</span>
                        </div>
                        <button className="bg-[#5F2EEA] text-white px-5 py-2 rounded-[4px] w-full mt-5 font-mulish hover:scale-[1.1] ease-in">Book now</button>
                    </div>
                    <div className="border-[1px] box-border rounded-md py-3 px-4">
                        <div className="flex gap-5 justify-center items-center">
                            <img src={require('../Assets/Image/ebuId.png')} alt="" className="w-[15rem] h-10"/>
                            <div className="flex flex-col w-full">
                                <span className="font-mulish font-bold text-2xl">ebv.id</span>
                                <span className="font-mulish text-[#6E7191] text-sm" >
                                    Whatever street No.12, South Purwokerto
                                </span>
                            </div>
                        </div>
                        <hr className="w-full mt-4" />
                        <div className="grid grid-cols-4 gap-5 mt-10">
                            <span className="font-mulish text-[14px]">08:30am</span>
                            <span className="font-mulish text-[14px]">10:30pm</span>
                            <span className="font-mulish text-[14px]">12:00pm</span>
                            <span className="font-mulish text-[14px]">02:00pm</span>
                            <span className="font-mulish text-[14px]">04:30pm</span>
                            <span className="font-mulish text-[14px]">07:00pm</span>
                            <span className="font-mulish text-[14px]">08:30pm</span>
                            <span className="font-mulish text-[14px]"></span>
                        </div>
                        <div className="flex justify-between mt-10">
                            <span className="font-mulish">Price</span>
                            <span className="font-mulish">$10.00/seat</span>
                        </div>
                        <button className="bg-[#5F2EEA] text-white px-5 py-2 rounded-[4px] w-full mt-5 font-mulish hover:scale-[1.1] ease-in">Book now</button>
                    </div>
                    <div className="border-[1px] box-border rounded-md py-3 px-4">
                        <div className="flex gap-5 justify-center items-center">
                            <img src={require('../Assets/Image/ebuId.png')} alt="" className="w-[15rem] h-10"/>
                            <div className="flex flex-col w-full">
                                <span className="font-mulish font-bold text-2xl">ebv.id</span>
                                <span className="font-mulish text-[#6E7191] text-sm" >
                                    Whatever street No.12, South Purwokerto
                                </span>
                            </div>
                        </div>
                        <hr className="w-full mt-4" />
                        <div className="grid grid-cols-4 gap-5 mt-10">
                            <span className="font-mulish text-[14px]">08:30am</span>
                            <span className="font-mulish text-[14px]">10:30pm</span>
                            <span className="font-mulish text-[14px]">12:00pm</span>
                            <span className="font-mulish text-[14px]">02:00pm</span>
                            <span className="font-mulish text-[14px]">04:30pm</span>
                            <span className="font-mulish text-[14px]">07:00pm</span>
                            <span className="font-mulish text-[14px]">08:30pm</span>
                            <span className="font-mulish text-[14px]"></span>
                        </div>
                        <div className="flex justify-between mt-10">
                            <span className="font-mulish">Price</span>
                            <span className="font-mulish">$10.00/seat</span>
                        </div>
                        <button className="bg-[#5F2EEA] text-white px-5 py-2 rounded-[4px] w-full mt-5 font-mulish hover:scale-[1.1] ease-in">Book now</button>
                    </div>
                    <div className="border-[1px] box-border rounded-md py-3 px-4">
                        <div className="flex gap-5 justify-center items-center">
                            <img src={require('../Assets/Image/ebuId.png')} alt="" className="w-[15rem] h-10"/>
                            <div className="flex flex-col w-full">
                                <span className="font-mulish font-bold text-2xl">ebv.id</span>
                                <span className="font-mulish text-[#6E7191] text-sm" >
                                    Whatever street No.12, South Purwokerto
                                </span>
                            </div>
                        </div>
                        <hr className="w-full mt-4" />
                        <div className="grid grid-cols-4 gap-5 mt-10">
                            <span className="font-mulish text-[14px]">08:30am</span>
                            <span className="font-mulish text-[14px]">10:30pm</span>
                            <span className="font-mulish text-[14px]">12:00pm</span>
                            <span className="font-mulish text-[14px]">02:00pm</span>
                            <span className="font-mulish text-[14px]">04:30pm</span>
                            <span className="font-mulish text-[14px]">07:00pm</span>
                            <span className="font-mulish text-[14px]">08:30pm</span>
                            <span className="font-mulish text-[14px]"></span>
                        </div>
                        <div className="flex justify-between mt-10">
                            <span className="font-mulish">Price</span>
                            <span className="font-mulish">$10.00/seat</span>
                        </div>
                        <button className="bg-[#5F2EEA] text-white px-5 py-2 rounded-[4px] w-full mt-5 font-mulish hover:scale-[1.1] ease-in">Book now</button>
                    </div>
                    <div className="border-[1px] box-border rounded-md py-3 px-4">
                        <div className="flex gap-5 justify-center items-center">
                            <img src={require('../Assets/Image/ebuId.png')} alt="" className="w-[15rem] h-10"/>
                            <div className="flex flex-col w-full">
                                <span className="font-mulish font-bold text-2xl">ebv.id</span>
                                <span className="font-mulish text-[#6E7191] text-sm" >
                                    Whatever street No.12, South Purwokerto
                                </span>
                            </div>
                        </div>
                        <hr className="w-full mt-4" />
                        <div className="grid grid-cols-4 gap-5 mt-10">
                            <span className="font-mulish text-[14px]">08:30am</span>
                            <span className="font-mulish text-[14px]">10:30pm</span>
                            <span className="font-mulish text-[14px]">12:00pm</span>
                            <span className="font-mulish text-[14px]">02:00pm</span>
                            <span className="font-mulish text-[14px]">04:30pm</span>
                            <span className="font-mulish text-[14px]">07:00pm</span>
                            <span className="font-mulish text-[14px]">08:30pm</span>
                            <span className="font-mulish text-[14px]"></span>
                        </div>
                        <div className="flex justify-between mt-10">
                            <span className="font-mulish">Price</span>
                            <span className="font-mulish">$10.00/seat</span>
                        </div>
                        <button className="bg-[#5F2EEA] text-white px-5 py-2 rounded-[4px] w-full mt-5 font-mulish hover:scale-[1.1] ease-in">Book now</button>
                    </div>
                    <div className="border-[1px] box-border rounded-md py-3 px-4">
                        <div className="flex gap-5 justify-center items-center">
                            <img src={require('../Assets/Image/ebuId.png')} alt="" className="w-[15rem] h-10"/>
                            <div className="flex flex-col w-full">
                                <span className="font-mulish font-bold text-2xl">ebv.id</span>
                                <span className="font-mulish text-[#6E7191] text-sm" >
                                    Whatever street No.12, South Purwokerto
                                </span>
                            </div>
                        </div>
                        <hr className="w-full mt-4" />
                        <div className="grid grid-cols-4 gap-5 mt-10">
                            <span className="font-mulish text-[14px]">08:30am</span>
                            <span className="font-mulish text-[14px]">10:30pm</span>
                            <span className="font-mulish text-[14px]">12:00pm</span>
                            <span className="font-mulish text-[14px]">02:00pm</span>
                            <span className="font-mulish text-[14px]">04:30pm</span>
                            <span className="font-mulish text-[14px]">07:00pm</span>
                            <span className="font-mulish text-[14px]">08:30pm</span>
                            <span className="font-mulish text-[14px]"></span>
                        </div>
                        <div className="flex justify-between mt-10">
                            <span className="font-mulish">Price</span>
                            <span className="font-mulish">$10.00/seat</span>
                        </div>
                        <button className="bg-[#5F2EEA] text-white px-5 py-2 rounded-[4px] w-full mt-5 font-mulish hover:scale-[1.1] ease-in">Book now</button>
                    </div>
                </section>
                <div className="flex m-auto items-center justify-center my-10">
                    <hr className="w-[400px] h-[2px] bg-[#dedede]"/>
                    <div className="font-mulish text-[16px] text-[#5F2EEA] mx-5">View more</div>
                    <hr className="w-[400px] h-[2px] bg-[#dedede]"/>
                </div>
                <Footer />
            </Fragment>
        )
    }
}


export default MovieDetailsPage;