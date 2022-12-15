import React, { Component } from 'react'

export default class InputPhone extends Component {
    render() {
        return (
            <>
                <label htmlFor="phone" className={this.props.labelClass}>Phone Number</label>
                <input type="tel" name='phone' className={this.props.phoneClass} id='phone' placeholder='Write your phone number'/>
            </>
        )
    }
}
