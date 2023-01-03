import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BookNow(props) {
    const navigate = useNavigate()

    const booking = () => {
        navigate('/order')
    }

    return (
        <div className="border-[1px] box-border rounded-md py-3 px-4 md:w-full lg:w-96">
            <div className="flex gap-5 justify-center items-center">
                <img src={props.cinemaLogo} alt="" className="w-[15rem] h-10"/>
                <div className="flex flex-col w-full">
                    <span className="font-mulish font-bold text-2xl">{props.cinema}</span>
                    <span className="font-mulish text-[#6E7191] text-sm" >
                        {props.address}
                    </span>
                </div>
            </div>
            <hr className="mt-4" />
            <div className="grid grid-cols-4 gap-5 mt-10">
                <span className="font-mulish text-[14px]">{props.hour1}</span>
                <span className="font-mulish text-[14px]">{props.hour2}</span>
                <span className="font-mulish text-[14px]">{props.hour3}</span>
                <span className="font-mulish text-[14px]">{props.hour4}</span>
                <span className="font-mulish text-[14px]">{props.hour5}</span>
                <span className="font-mulish text-[14px]">{props.hour6}</span>
                <span className="font-mulish text-[14px]">{props.hour7}</span>
                <span className="font-mulish text-[14px]">{props.hour8}</span>
            </div>
            <div className="flex justify-between mt-10">
                <span className="font-mulish">price</span>
                <span className="font-mulish">${props.price}/seat</span>
            </div>
            <button onClick={booking} className="bg-[#5F2EEA] text-white px-5 py-2 rounded-[4px] w-full mt-5 font-mulish hover:scale-[1.1] ease-in">Book now</button>
        </div>
    )
};

