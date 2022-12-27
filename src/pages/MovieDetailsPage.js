import React, { Component, Fragment } from "react";
import BookNow from "./component/BookNow";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MovieDetails from "./component/MovieDetails";



class MovieDetailsPage extends Component{
    render() {
        return (
            <Fragment>
                <Header nav1="Home" nav2="List Movie"/>
                <MovieDetails />
                <section className="text-center mt-10">
                    <span className="font-mulish font-bold">Showtimes and Tickets</span>
                    <div className="flex gap-10 justify-center mt-5">
                        <div className="relative">
                            <input type="date" value="2022-12-10" className="font-mulish focus:ring-indigo-500 focus:outline-none date focus:border-indigo-500 border-[1px] rounded-md text-sm py-2 px-3 mt-1 bg-stone-100" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <select id="city" name="city" className="mt-1 block w-full rounded-md border border-gray-300 py-3 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-stone-100 font-mulish">
                                <option disabled>City</option>
                                <option className="font-mulish">Purwokerto</option>
                                <option className="font-mulish">Jakarta</option>
                                <option className="font-mulish">Bandung</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className="grid gap-20 lg:grid-cols-3 lg:gap-5 px-5 mt-32">
                    <BookNow
                        cinemaLogo={require('../Assets/Image/ebuId.png')}
                        cinema='Ebu.id'
                        address='Whatever street No.12, South Purwokerto'
                        hour1='08:30am'
                        hour2='10:30pm'
                        hour3='12:00pm'
                        hour4='02:00pm'
                        hour5='04:30pm'
                        hour6='07:00pm'
                        hour7='08:30pm'
                        hour8=''
                        price='10'
                    />
                    <BookNow
                        cinemaLogo={require('../Assets/Image/ebuId.png')}
                        cinema='Ebu.id'
                        address='Whatever street No.12, South Purwokerto'
                        hour1='08:30am'
                        hour2='10:30pm'
                        hour3='12:00pm'
                        hour4='02:00pm'
                        hour5='04:30pm'
                        hour6='07:00pm'
                        hour7='08:30pm'
                        hour8=''
                        price='10'
                    />
                    <BookNow
                        cinemaLogo={require('../Assets/Image/ebuId.png')}
                        cinema='Ebu.id'
                        address='Whatever street No.12, South Purwokerto'
                        hour1='08:30am'
                        hour2='10:30pm'
                        hour3='12:00pm'
                        hour4='02:00pm'
                        hour5='04:30pm'
                        hour6='07:00pm'
                        hour7='08:30pm'
                        hour8=''
                        price='10'
                    />
                    <BookNow
                        cinemaLogo={require('../Assets/Image/ebuId.png')}
                        cinema='Ebu.id'
                        address='Whatever street No.12, South Purwokerto'
                        hour1='08:30am'
                        hour2='10:30pm'
                        hour3='12:00pm'
                        hour4='02:00pm'
                        hour5='04:30pm'
                        hour6='07:00pm'
                        hour7='08:30pm'
                        hour8=''
                        price='10'
                    />
                    <BookNow
                        cinemaLogo={require('../Assets/Image/ebuId.png')}
                        cinema='Ebu.id'
                        address='Whatever street No.12, South Purwokerto'
                        hour1='08:30am'
                        hour2='10:30pm'
                        hour3='12:00pm'
                        hour4='02:00pm'
                        hour5='04:30pm'
                        hour6='07:00pm'
                        hour7='08:30pm'
                        hour8=''
                        price='10'
                    />
                    <BookNow
                        cinemaLogo={require('../Assets/Image/ebuId.png')}
                        cinema='Ebu.id'
                        address='Whatever street No.12, South Purwokerto'
                        hour1='08:30am'
                        hour2='10:30pm'
                        hour3='12:00pm'
                        hour4='02:00pm'
                        hour5='04:30pm'
                        hour6='07:00pm'
                        hour7='08:30pm'
                        hour8=''
                        price='10'
                    />
                </section>
                <div className="flex m-auto items-center justify-center my-10">
                    <hr className="w-28 lg:w-[400px] h-[2px] bg-[#dedede]"/>
                    <div className="font-mulish text-[16px] text-[#5F2EEA] mx-5">View more</div>
                    <hr className="w-28 lg:w-[400px] h-[2px] bg-[#dedede]"/>
                </div>
                <Footer />
            </Fragment>
        )
    }
}


export default MovieDetailsPage;