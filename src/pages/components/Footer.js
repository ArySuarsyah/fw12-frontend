import React, { Component, Fragment } from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";



class Footer extends Component{
    render() {
        return (
            <Fragment>
                <footer className="flex flex-col pt-5 lg:px-10 mt-14 m-auto md:items-center">
                    <div className="flex flex-wrap m-5 gap-10 md:items-start md:grid md:grid-cols-4 lg:grid-cols-4">
                        <div>
                            <img src={require('../../Assets/Image/TickitzBlue.png')} alt="brand logo" className="w-40 h-16 mb-3" />
                            <span className="text-sm text-[#6E7191;] font-mulish">Stop waiting in line. Buy tickets conveniently, watch movies quietly.</span>
                        </div>
                        <div className="hidden font-mulish md:w-32 md:block md:m-0 lg:pt-2 md:justify-self-center">
                            <h2 className="mb-5">Explore</h2>
                            <div className="flex flex-col gap-5">
                                <span>Home</span>
                                <span>List Movie</span>
                            </div>
                        </div>
                        <div className="lg:pt-2">
                            <h2 className="mb-5 font-mulish">Our Sponsor</h2>
                            <div className="flex flex-wrap items-end justify-center gap-2 md:flex-col md:items-start md:gap-5">
                                <img src={require('../../Assets/Image/ebuId.png')} alt="" className="w-20 md:w-48" />
                                <img src={require('../../Assets/Image/cineOne21.png')} alt="" className="w-28 md:w-48" />
                                <img src={require('../../Assets/Image/hiflix.png')} alt="" className="w-20 md:w-48" />
                            </div>
                        </div>
                        <div className="lg:pt-2">
                            <span className="font-mulish">Follow US</span>
                            <div className="flex flex-wrap gap-10 font-mulish my-5 justify-center md:flex-col md:gap-5 md:mt-5">
                                <div className="flexSocial">
                                    <FiFacebook className="w-8 h-8"/>
                                    <span className="hidden md:block lg:block">Tickitz Cinema id</span>
                                </div>
                                <div className="flexSocial">
                                    <FiInstagram className="w-8 h-8"/>
                                    <span className="hidden md:block lg:block">tickitz.id</span>
                                </div>
                                <div className="flexSocial">
                                    <FiTwitter className="w-8 h-8"/>
                                    <span className="hidden md:block lg:block">tickitz.id</span>
                                </div>
                                <div className="flexSocial">
                                    <FiYoutube className="w-8 h-8"/>
                                    <span className="hidden md:block lg:block">Tickitz Cinema id</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-auto mt-6 mb-20">
                        <span className="font-mulish">© 2020 Tickitz. All Rights Reserved.</span>
                    </div>
                </footer>
            </Fragment>
        )
    }
}


export default Footer;