import React, { Component } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";

export default class InputPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: 'password',
            classShow: 'absolute top-5 right-5 h-5 w-5 cursor-pointer hidden',
            classHide: 'absolute top-5 right-5 h-5 w-5 cursor-pointer ',
        }
    }




        ShowHide = () => {
            if (this.state.type === 'password') {
                this.setState({
                    type: 'text',
                    classShow: 'absolute top-5 right-5 h-5 w-5 cursor-pointer',
                    classHide: 'absolute top-5 right-5 h-5 w-5 cursor-pointer hidden'
                })
            } else {
                this.setState({
                    type: 'password',
                    classShow: 'absolute top-5 right-5 h-5 w-5 cursor-pointer hidden',
                    classHide: 'absolute top-5 right-5 h-5 w-5 cursor-pointer ',
                })
            }
        }



    
    render() {
        return (
            <>
                <label htmlFor="password" className={this.props.labelClass}>Password</label>
                <div className='relative w-96'>
                    <FiEye onClick={this.ShowHide} className={this.state.classShow} />
                    <FiEyeOff onClick={this.ShowHide} className={this.state.classHide} />
                    <input type={this.state.type} name='password' className={this.props.passwordClass} id='password' placeholder='Write your password' />
                </div>
            </>
        )
    }
}
