import { useNavigate } from "react-router-dom";
import React, { Fragment } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SeatGrid from "./component/orderPage/SeatGrid";

const OrderPage = () => {

    const navigate = useNavigate();


    const payment = () => {
        navigate('/payment');
    }

    const changeMovie = () => {
        navigate('/view')
    }



    return (
        <Fragment>
            <Header nav1="Home" nav2="List Movie" />

            <section className="grid-order-page">
                <div className="flex flex-col w-full px-5 md:pr-16">
                    <span className="movieSelected-paymentInfo">Movie Selected</span>
                    <div className="flex justify-between my-5 items-end text-[#000] lg:ml-10 lg:mr-5 lg:my-10 ">
                        <span>Spider-Man: Homecoming</span>
                        <a href="./view"><span className="text-[14px] font-semibold hover:text-[#5F2EEA] cursor-pointer">
                            Change Movie
                        </span></a>
                    </div>
                    <span className="font-bold">Choose Your Seat</span>
                    <div className="flex flex-col lg:justify-center items-center lg:p-10">
                        <div className="flex flex-col justify-center items-center ml-7">
                                <p className="text-[#4E4B66]">Screen</p>
                            <hr className="w-72 md:w-[25rem] lg:w-[25rem] h-[4px] bg-[#D6D8E7] my-2" />
                        </div>
                        <SeatGrid />
                    </div>
                    <div className="flex flex-row justify-between">
                        <button
                            onClick={changeMovie}
                            type="submit"
                            className="w-40 rounded-[2px] lg:w-[15rem] h-10 text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white border-[1px] border-[#5F2EEA]">
                            Change your movie
                        </button>
                        <button
                            onClick={payment}
                            type="button"
                            className="w-40 rounded-[2px] lg:w-[15rem] h-10 text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white border-[1px] border-[#5F2EEA]">
                            Checkout now
                        </button>
                    </div>
                </div>
                <div className="mt-10 mx-5 lg:mt-0 lg:mx-0">
                    <span className="font-semibold">Order info</span>
                    <div className="mt-10 flex flex-col items-center">
                        <img src={require('../Assets/Image/cineOne21.png')} alt="" />
                        <span className="text-[#14142B] w-40  my-5 font-semibold text-center">
                            CineOne21 Cinema
                        </span>
                        <div className="orderInfo-personalInfo">
                            <div className="flex justify-between text-[14px]">
                                <span className="text-[#6B6B6B]">Movie selected</span>
                                <span className="text-[#14142B]">Spider-Man: Homecoming</span>
                            </div>
                            <div className="flex justify-between text-[14px]">
                                <span className="text-[#6B6B6B]">Tuesday, 07 July 2020</span>
                                <span className="text-[#14142B]">02:00</span>
                            </div>
                            <div className="flex justify-between text-[14px]">
                                <span className="text-[#6B6B6B]">One ticket price</span>
                                <span className="text-[#14142B]">$10</span>
                            </div>
                            <div className="flex justify-between text-[14px]">
                                <span className="text-[#6B6B6B]">Seat choosed</span>
                                <span className="text-[#14142B]">C4, C5, C6</span>
                            </div>
                            <hr />
                            <div className="flex justify-between text-[14px]">
                                <span className="text-[#6B6B6B]">Total Payment</span>
                                <span className="text-[#14142B]">$30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}


export default OrderPage;