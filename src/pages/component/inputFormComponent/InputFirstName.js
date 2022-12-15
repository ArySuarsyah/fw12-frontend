import React from 'react'

const InputFirstName = (props) => {

    return (
        <>
            <label htmlFor="firstName" className={props.labelClass}>First Name</label>
            <input type="text" name='firstname' className={props.firstNameClass} id='firstName' placeholder='Write your first name' />
            </>
        )
}

export default InputFirstName;

