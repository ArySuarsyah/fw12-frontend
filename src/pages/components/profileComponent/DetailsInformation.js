import React, { Component } from 'react'

export default class DetailsInformation extends Component {
    render() {
        return (
            <>
                <form className='font-mulish lg:p-10'>
                    <div className='mb-5 rounded-[24px]'>
                        <span>Details Information</span>
                        <hr className='mt-3'/>
                    </div>
                    <div className='flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10'>
                        <div className='flex flex-col'>
                            <label for="fullname">Fullname</label>
                            <input type="text" id="fullname" className='details-information' />
                        </div>
                        <div className='flex flex-col'>
                            <label for="fullname">Fullname</label>
                            <input type="text" id="fullname" className='details-information' />
                        </div>
                        <div className='flex flex-col my-5'>
                            <label for="email">E-mail</label>
                            <input type="email" id='email' className='details-information' />
                        </div>
                        <div className='flex flex-col justify-end my-5'>
                            <label for="phone">Phone Number</label>
                            <div className='flex justify-center items-center border-[1px] border-[#DEDEDE] overflow-hidden rounded-[16px] h-14 mt-3 outline-[#5F2EEA]'>
                                <input type="text" value='+62' disabled className='text-center h-14 w-12' />
                                <hr className='h-7 w-[2px] bg-[#dedede]'/>
                                <input type="tel" id='phone' className='h-14 w-full outline-none p-5'/>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='w-full bg-[#5F2EEA] text-white h-14 lg:w-[16rem] rounded-[16px]'>
                        Update changes
                    </button>
                </form>
            </>
        )
    }
}
