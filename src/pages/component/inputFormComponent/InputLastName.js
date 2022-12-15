import React, { Component } from 'react'

export default class InputLastName extends Component {

    render() {
        return (
            <>
                <label htmlFor="lastName" className={this.props.labelClass} >Last Name</label>
                <input type="text" name='lastname' className={this.props.lastNameClass} id='lastName' placeholder='Write your last name'/>
            </>
        )
    }
}
