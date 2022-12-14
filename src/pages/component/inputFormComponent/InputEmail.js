import React, { Component } from 'react'

export default class InputEmail extends Component {
    render() {
        return (
            <>
                <label for="email" className='flex flex-col mb-5 font-mulish'>Email</label>
                <input type="email" name='email' className='input' id='email' placeholder='Write your email'/>
            </>
        )
    }
}
