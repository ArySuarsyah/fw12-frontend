import React, { Component } from 'react'

export default class InputLastName extends Component {
    render() {
        return (
            <>
                <label for="lastName" className='flex flex-col mb-5 font-mulish'>Last Name</label>
                <input type="text" name='lastname' className='input' id='lastname' placeholder='Write your last name'/>
            </>
        )
    }
}
