import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div className='flex flex-col justify-center items-center border-[1px] border-[#DEDEDE  py-10 font-mulish w-[18rem] gap-5 rounded-[16px] ml-10'>
                    <span className='self-start ml-10'>INFO</span>
                    <img src={require('../../../Assets/Image/imagesProfile.jpeg')} alt="Profile" className='rounded-[50%] w-20 h-20'/>
                    <span>Name</span>
                    <span>Admin</span>
                    <hr className='bg-[#dedede] w-full' />
                    <button type='submit' className='border-[1px] border-[#5F2EEA] rounded-[16px] w-40 h-12 bg-[#5F2EEA] text-white mt-5'>Logout</button>
            </div>

        )
    }
}
