import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Movielist from './component/Movielist';
import SearchAndShort from './component/ViewAll/SearchAndShort';


class ViewAll extends Component {
    render() {
        return (
            <div className='w-full'>
                <Header nav1="Home" nav2="List Movie"/>
                <section>
                    <SearchAndShort />
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
            </div>
        )
    }
}



export default ViewAll;