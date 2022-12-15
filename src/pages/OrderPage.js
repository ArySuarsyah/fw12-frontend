// import { useNavigate } from "react-router-dom";
import React, { Fragment } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

const OrderPage = () => {

    // const navigate = useNavigate;


    // const payment = () => {
    //     navigate('/payment');
    // }



    return (
        <Fragment>
            <Header nav1="Home" nav2="List Movie" />

            <section className="grid-order-page">

                <div className="flex flex-col">

                    <span className="movieSelected-paymentInfo">Movie Selected</span>

                    <div className="flex justify-between items-end text-[#000] ml-10 mr-5  my-10 ">

                        <span>Spider-Man: Homecoming</span>
                        <a href="./view"><span className="text-[14px] font-semibold hover:text-[#5F2EEA] cursor-pointer">
                            Change Movie
                        </span></a>
                    </div>
                    <span className="font-bold">Choose Your Seat</span>
                    <div className="flex flex-col justify-center items-center  p-10">
                        <div className="flex flex-col justify-center items-center ml-7">
                                <p className="text-[#4E4B66]">Screen</p>
                            <hr className="w-[25rem] h-[4px] bg-[#D6D8E7] my-2" />
                        </div>
                        <div className="grid grid-cols-2 w-full">
                            <div className="seatGrid">
                                <div className="seatLetter">A</div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter">B</div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter">C</div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter">D</div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter">E</div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter">F</div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter">G</div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div></div>
                                <div className="seatNum">1</div>
                                <div className="seatNum">2</div>
                                <div className="seatNum">3</div>
                                <div className="seatNum">4</div>
                                <div className="seatNum">5</div>
                                <div className="seatNum">6</div>
                                <div className="seatNum">7</div>
                            </div>
                            <div className="seatGrid">
                                <div className="seatLetter"></div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter"></div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter"></div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter"></div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter"></div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter"></div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div className="seatLetter"></div>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <span className="seat"></span>
                                <div></div>
                                <div className="seatNum">8</div>
                                <div className="seatNum">9</div>
                                <div className="seatNum">10</div>
                                <div className="seatNum">11</div>
                                <div className="seatNum">12</div>
                                <div className="seatNum">13</div>
                                <div className="seatNum">14</div>
                            </div>
                        </div>
                        <div className="self-start m-10">
                            <span className="font-semibold">Seating key</span>
                            <div className="grid grid-cols-3 gap-5 mt-5">
                                <div className="flex gap-5 text-[#4E4B66]">
                                    <span className="seatKey bg-[#D6D8E7]"></span>
                                    <span>Avaible</span>
                                </div>
                                <div className="flex gap-5 text-[#4E4B66]">
                                    <span className="seatKey bg-[#5F2EEA]"></span>
                                    <span>Selected</span>
                                </div>
                                <div className="flex gap-5 text-[#4E4B66]">
                                    <span className="seatKey bg-[#6E7191]"></span>
                                    <span>Sold</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <a href="./view"><button type="submit" className="rounded-[2px] w-[15rem] h-10 text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white border-[1px] border-[#5F2EEA]">
                            Change your movie
                        </button></a>
                        <a href="./Payment"><button
                            type="button"
                            className="rounded-[2px] w-[15rem] h-10 text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white border-[1px] border-[#5F2EEA]">
                            Checkout now
                        </button></a>
                    </div>
                </div>
                <div>
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