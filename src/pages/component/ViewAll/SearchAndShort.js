import React from 'react';
import { BsSearch } from "react-icons/bs";


const SearchAndShort = (props) => {
    return (
        <div className='flex justify-between w-[75rem] m-auto items-end mt-16'>
            <span className='font-mulish font-bold hover:text-blue-600 hover:scale-[1.1] cursor-pointer text-2xl'>
                {props.title}
            </span>
            <div className='flex gap-5'>
                <select name="short" id="short" className='p-2 box-border rounded-[8px] outline-blue-200'>
                    <option value="short" disabled className='font-mulish'>Short</option>
                    <option value="title" className='font-mulish'>Title</option>
                    <option value="time" className='font-mulish'>Time</option>
                    <option value="A-Z" className='font-mulish'>A-Z</option>
                    <option value="Z-A" className='font-mulish'>Z-A</option>
                </select>
                <div className='relative searchHover'>
                    <input type="text" className="border-2 h-11 outline-none rounded-[8px] m-auto px-4 w-[15rem] font-mulish disabled" placeholder="Search Movie Name" />
                    <BsSearch className="absolute top-3 right-3 w-5 h-5" disabled />
                </div>
            </div>
        </div>
    )
}

export default SearchAndShort;