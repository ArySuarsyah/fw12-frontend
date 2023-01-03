import React from 'react'

const InputEmail = (props) => {

        return (
            <>
                <label htmlFor="email" className={props.labelClass}>Email</label>
                <input type="email" name='email' className={props.emailClass} id='email' placeholder='Write your email'/>
            </>
        )
    }


export default InputEmail;