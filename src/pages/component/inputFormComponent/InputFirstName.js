import React, { Component } from 'react'

export default class InputFirstName extends Component {
    render() {
        return (
            <>
                <label for="firstName" className='flex flex-col mb-5 font-mulish'>First Name</label>
                <input type="text" name='firstname' className='inputSignUp' id='firstName' placeholder='Write your first name' />
            </>
        )
    }
}
