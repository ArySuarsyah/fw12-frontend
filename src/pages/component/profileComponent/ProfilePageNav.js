import React, { Component } from 'react'

export default class ProfilPageNav extends Component {
    render() {
        return (
            <div className='flex gap-5 font-mulish items-center h-20 p-10 text-[#AAAAAA]'>
                <span className='hover:text-[#000] hover:underline underline-offset-[34px] decoration-[#5F2EEA]'>Account Settings</span>
                <span className='hover:text-[#000] hover:underline underline-offset-[34px] decoration-[#5F2EEA]'>Order History</span>
            </div>
        )
    }
}
