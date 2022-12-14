import React, { Component } from 'react'

export default class InputPhone extends Component {
    render() {
        return (
            <>
                <label for="phone" className='flex flex-col mb-5 font-mulish'>Phone Number</label>
                <input type="tel" name='phone' className='input' id='phone' placeholder='Write your phone number'/>
            </>
        )
    }
}
