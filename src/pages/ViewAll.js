import React, { Component, Fragment } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import { BsSearch } from "react-icons/bs";
import Movielist from './component/Movielist';


class ViewAll extends Component {
    render() {
        return (
            <Fragment className="w-full">
                <Header />
                <section>
                    <div className='flex justify-between w-[75rem] m-auto items-end mt-16'>
                        <span className='font-mulish font-bold hover:text-blue-600 hover:scale-[1.1] cursor-pointer text-2xl'>List Movie</span>
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
                    <div className="bg-white overflow-x-scroll">
                        <div className="flex items-center gap-5 h-16 m-auto mt-2 text-blue-800 w-[75rem] mb-9">
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
                    </div>
                        <Movielist />
                </section>
                <Footer />
            </Fragment>
        )
    }
}



export default ViewAll;