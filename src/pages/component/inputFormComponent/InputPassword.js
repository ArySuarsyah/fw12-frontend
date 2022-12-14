import React, { Component } from 'react';
import { FiEye } from "react-icons/fi";

export default class InputPassword extends Component {
    render() {
        return (
            <>
                <label for="password" className='flex flex-col mb-5 password font-mulish'>Password</label>
                <div className='relative w-96'>
                    <input type="password" name='password' className='input password' id='password' placeholder='Write your password' />
                    <FiEye className='absolute top-5 right-5 h-5 w-5 cursor-pointer' />
                </div>
            </>
        )
    }
}
