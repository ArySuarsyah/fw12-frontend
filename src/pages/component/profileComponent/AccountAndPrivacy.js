import React, { Component } from 'react';
import { FiEye } from "react-icons/fi";


export default class AccountAndPrivacy extends Component {
    render() {
        return (
            <>
                <div className='p-10 font-mulish'>
                    <span className='mr-10'>Account And Privacy</span>
                    <div className='grid grid-cols-2 gap-10 mb-10 mt-10'>
                        <div>
                            <label for="password" className='flex flex-col mb-5 password font-mulish'>
                                Password
                            </label>
                            <div className='relative w-full'>
                                <input type="password" name='password' className='accountAndPrivacy password' id='password' placeholder='Write your password' />
                                <FiEye className='absolute top-5 right-5 h-5 w-5 cursor-pointer' />
                            </div>
                        </div>
                        <div>
                            <label for="password" className='flex flex-col mb-5 password font-mulish'>
                                Confirm Password
                            </label>
                            <div className='relative w-full'>
                                <input type="password" name='password' className='accountAndPrivacy password' id='password' placeholder='Confirm your password' />
                                <FiEye className='absolute top-5 right-5 h-5 w-5 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='bg-[#5F2EEA] text-white h-14 w-[16rem] rounded-[16px]'>
                            Update changes
                    </button>
                </div>
                </>
        )
    }
}
