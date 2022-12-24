import React from "react";
// import { useNavigate } from "react-router-dom";



const TicketHistory = (props) => {
    // const navigate = useNavigate;

    // const status = () => {
    //     navigate('./ticket')
    // }
    return (
        <div className="font-mulish p-10 border-[1px] border-[#dedede] rounded-[8px]">
            <div className="grid grid-cols items-center gap-10">
                <div className="flex flex-col gap-10">
                    <span className="text-[#AAAAAA]">{props.date}</span>
                    <span className="font-semibold">{props.title}</span>
                </div>
                <img src={props.image} alt="" className="justify-center lg:justify-self-end "/>
            </div>
            <hr className="w-full h-[1px] bg-[#dedede] my-10"/>
            <div className="flex justify-between">
                <button type="submit" className="bg-[#00BA88] rounded-[4px] text-white h=[40px] w-32 p-1">{props.ticket}</button>
                <span className="text-[#AAAAAA] hover:text-blue-700 cursor-pointer">See details</span>
            </div>
        </div>
    )
};

export default TicketHistory;