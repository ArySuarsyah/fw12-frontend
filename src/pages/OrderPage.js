import React, { Component, Fragment } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

class OrderPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <section className="font-mulish text-[#14142B] grid grid-cols-[800px_minmax(200px,_1fr)_1px] mx-10 my-7 gap-5">
                    <div className="flex flex-col">
                        <span className="font-semibold hover:text-blue-700 w-32 ">Movie Selected</span>
                        <div className="flex justify-between items-end text-[#000] ml-10 mr-5  my-10 ">
                            <span>Spider-Man: Homecoming</span>
                            <span className="text-[14px] font-semibold hover:text-[#5F2EEA]">Change Movie</span>
                        </div>
                        <span className="font-bold">Choose Your Seat</span>
                        <div className="flex flex-col justify-center items-center  p-10">
                            <div className="flex flex-col justify-center items-center ml-7">
                                <p className="text-[#4E4B66]">Screen</p>
                                <hr class="w-[25rem] h-[4px] bg-[#D6D8E7] my-2" />
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
                                    <div class="seatNum">1</div>
                                    <div class="seatNum">2</div>
                                    <div class="seatNum">3</div>
                                    <div class="seatNum">4</div>
                                    <div class="seatNum">5</div>
                                    <div class="seatNum">6</div>
                                    <div class="seatNum">7</div>
                                </div>
                                <div class="seatGrid">
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
                                    <div class="seatNum">8</div>
                                    <div class="seatNum">9</div>
                                    <div class="seatNum">10</div>
                                    <div class="seatNum">11</div>
                                    <div class="seatNum">12</div>
                                    <div class="seatNum">13</div>
                                    <div class="seatNum">14</div>
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
                            <button type="submit" className="rounded-[2px] w-[15rem] h-10 text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white">Change your movie</button>
                            <button type="submit" className="rounded-[2px] w-[15rem] h-10 text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white">Checkout now</button>
                        </div>
                    </div>
                    <div>
                        <span className="font-semibold">Order info</span>
                        <div className="mt-10 flex flex-col items-center">
                            <img src={require('../Assets/Image/cineOne21.png')} alt="" />
                            <span className="text-[#14142B] w-40  my-5 font-semibold text-center">CineOne21 Cinema</span>
                            <div className=" flex flex-col w-full h-[15rem] gap-5">
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
}

export default OrderPage;