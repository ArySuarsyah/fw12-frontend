import React, { Component, Fragment } from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";



class Footer extends Component{
    render() {
        return (
            <Fragment>
                <footer className="flex flex-col px-10 mt-14 m-auto">
                    <div className="flex flex-col-4 gap-10 m-auto">
                        <div className="w-[20rem]">
                            <img src={require('../Assets/Image/TickitzBlue.png')} alt="brand logo" className="w-40 h-16 mb-3" />
                            <span className="text-sm text-[#6E7191;]">Stop waiting in line. Buy tickets conveniently, watch movies quietly.</span>
                        </div>
                        <div className="m-5">
                            <h2 className="mb-5">Explore</h2>
                            <div className="flex flex-col">
                                <span>Home</span>
                                <span>List Movie</span>
                            </div>
                        </div>
                        <div className="m-5">
                            <h2 className="mb-5">Our Sponsor</h2>
                            <div className="flex flex-col gap-5">
                                <img src={require('../Assets/Image/ebuId.png')} alt="" />
                                <img src={require('../Assets/Image/cineOne21.png')} alt="" />
                                <img src={require('../Assets/Image/hiflix.png')} alt="" />
                            </div>
                        </div>
                        <div className="m-5">
                            <span className="mb-5">Follow US</span>
                            <div className="flexSocial">
                                <FiFacebook />
                                <span>Tickitz Cinema id</span>
                            </div>
                            <div className="flexSocial">
                                <FiInstagram />
                                <span>tickitz.id</span>
                            </div>
                            <div className="flexSocial">
                                <FiTwitter />
                                <span>tickitz.id</span>
                            </div>
                            <div className="flexSocial">
                                <FiYoutube />
                                <span>Tickitz Cinema id</span>
                            </div>
                        </div>
                    </div>
                    <div className="m-auto mt-6 mb-6">
                        <span className="">© 2020 Tickitz. All Rights Reserved.</span>
                    </div>
                </footer>
            </Fragment>
        )
    }
}


export default Footer;