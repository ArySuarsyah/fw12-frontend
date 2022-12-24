import React, { Component } from 'react'

export default class SeatGrid extends Component {
    render() {
        return (
            <>
                <div className="grid grid-cols-2 mt-5 w-full">
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
                    <div className="grid lg:grid-cols-3 gap-5 mt-5">
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
            </>
        )
    }
    
}
