import React from "react";
import { useNavigate } from "react-router-dom";



const TicketHistory = (props) => {
    // const navigate = useNavigate;

    // const status = () => {
    //     navigate('./ticket')
    // }
    return (
        <div className="font-mulish p-10 border-[1px] border-[#dedede] rounded-[8px]">
            <div className="grid grid-cols-2 items-center gap-5 ">
                <div className="flex flex-col gap-5">
                    <span className="text-[#AAAAAA]">{props.date}</span>
                    <span className="font-semibold">{props.title}</span>
                </div>
                <img src={props.image} alt="" className="justify-self-end"/>
            </div>
            <hr className="w-full h-[1px] bg-[#dedede] my-10"/>
            <div className="flex justify-between">
                <a href="./ticket"><button type="submit" className="bg-[#00BA88] rounded-[4px] text-white h=[40px] w-32 p-1">{props.ticket}</button></a>
                <span className="text-[#AAAAAA] hover:text-blue-700 cursor-pointer">See details</span>
            </div>
        </div>
    )
};

export default TicketHistory;