import React, { Fragment } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/sign-In')
    };

    const profile = () => {
        navigate('/profile')
    }

    const nav2 = () => {
        if (props.nav2 === "List Movie")
            navigate('/view')
    }
    return (
        <Fragment>
            <header className="flex flex-row justify-between h-20 mt-2 font-mulish bg-white">
                <div className="flex justify-center items-end gap-20 mb-5 mt-14">
                    <img src={require('../../Assets/Image/TickitzBlue.png')} alt="Brand Logo" className="h-12 mx-4 border-box" />
                    <div className="flex gap-10 text-base font-bold">
                        <span className="hover:text-blue-700 cursor-pointer hover:scale-[1.1] drop-shadow-xl font-mulish">{props.nav1}
                        </span>
                        <span onClick={nav2} className="hover:text-blue-700 cursor-pointer hover:scale-[1.1] drop-shadow-xl font-mulish">{props.nav2}
                        </span>
                        <span className="hover:text-blue-700 cursor-pointer hover:scale-[1.1] drop-shadow-xl font-mulish">{props.nav3}
                        </span>
                        <span className="hover:text-blue-700 cursor-pointer hover:scale-[1.1] drop-shadow-xl font-mulish">{props.nav4}
                        </span>
                    </div>
                </div>
                <div className="top-0 mt-2">
                    <div className="relative flex flex-row gap-20">
                        <div className="flex searchParent relative">
                            <input type="text" className="border-2 h-11 outline-none rounded m-auto pl-4 pr-10 w-12 font-mulish box-border" placeholder="Search Movie Name" />
                            <BsSearch className="absolute w-[1.5em] h-[1.5em] top-2 right-[10px] m-2" />
                        </div>
                        <div className="top-0.0 mr-11 image">
                            <img src={require('../../Assets/Image/imagesProfile.jpeg')} alt="Profile"className="rounded-full w-14 hover:scale-[1.1] hover:drop-shadow-xl" />
                            <div className="flex flex-col absolute right-11 gap-4 top-0 text-center scale-0 hover:scale-1 drop">
                                <span onClick={profile} className="font-mulish cursor-pointer hover:text-blue-800">Profile</span>
                                <span onClick={logout} className="font-mulish cursor-pointer hover:text-blue-800">Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}


export default Header;