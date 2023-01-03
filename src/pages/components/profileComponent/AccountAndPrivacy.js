import React, { Component } from 'react';
import { FiEye } from "react-icons/fi";


export default class AccountAndPrivacy extends Component {
    render() {
        return (
            <>
                <div className='mt-10 font-mulish lg:p-10'>
                    <span className='lg:mr-10'>Account And Privacy</span>
                    <div className='flex flex-col gap-5 mt-10 lg:grid lg:grid-cols-2 lg:gap-10 lg:mb-10 lg:mt-10'>
                        <div>
                            <label for="password" className='flex flex-col mb-3 password font-mulish'>
                                Password
                            </label>
                            <div className='relative w-full'>
                                <input type="password" name='password' className='accountAndPrivacy password' id='password' placeholder='Write your password' />
                                <FiEye className='absolute top-5 right-5 h-5 w-5 cursor-pointer' />
                            </div>
                        </div>
                        <div>
                            <label for="password" className='flex flex-col mb-3 password font-mulish'>
                                Confirm Password
                            </label>
                            <div className='relative w-full'>
                                <input type="password" name='password' className='accountAndPrivacy password' id='password' placeholder='Confirm your password' />
                                <FiEye className='absolute top-5 right-5 h-5 w-5 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='mt-5 w-full bg-[#5F2EEA] text-white h-14 lg:w-[16rem] rounded-[16px]'>
                            Update changes
                    </button>
                </div>
                </>
        )
    }
}
