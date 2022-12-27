import React, { Component } from 'react';
import { FiEye } from "react-icons/fi";




class ResetPassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            circle: 'circle',
            fontForgot: 'fontForgot',
            fill: 'circle',
            fontFill: 'fontForgot'
        }

        
    }
        active = () => {
            if (this.state.circle === 'circle') {
                this.setState({
                    circle: 'circleActive',
                    fontForgot: 'fontForgotActive'
                })
            }
        }
    
    fillActive = () => {
        this.setState({
            fill: 'circleActive',
            fontFill: 'fontForgotActive'
        })
    }
    



    render() {

        return (
            <div className='lg:flex lg:flex-cols-2 md:gap-x-7 w-full font-inter md:justify-evenly'>
                <section className="hidden bg-[url('../../Assets/Image/image1.png')] md:bg-cover     bg-no-repeat md:h-[30rem] md:block lg:block lg:h-screen lg:w-full lg:bg-cover">
                    <div className='bg-blue-800/50 w-full h-full flex flex-col justify-start items-start py-10 px-16'>
                        <span className='text-white text-6xl font-bold'>MMId</span>
                        <span className='text-white text-3xl font-bold font-mulish tracking-wider'>
                            Lets reset your password
                        </span>
                        <span className='text-white font-mulish w-[25rem]'>
                            To be able to use your account again, please
                            complete the following steps.
                        </span>
                        <div className='flex gap-5 w-92 mt-10'>
                            <div className='flex flex-col mb-5'>
                                <div className='center'>
                                    <div className='circleActive'>1</div>
                                    <div className='fontForgotActive'>Fill your complete email</div>
                                </div>
                                <div className='line'></div>
                                <div className='center'>
                                    <div className='circleActive'>2</div>
                                    <div className='fontForgotActive'>Check your email</div>
                                </div>
                                <div className='line'></div>
                                <div className='center'>
                                    <div className={this.state.fill}>3</div>
                                    <div className={this.state.fontFill}>Enter your new password</div>
                                </div>
                                <div className='line'></div>
                                <div className='center'>
                                    <div className={this.state.circle}>4</div>
                                    <div className={this.state.fontForgot}>Done</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mx-5 lg:w-[50rem]'>
                    <div className="mt-16">
                        <h2 className='text-3xl mb-2 font-bold font-mulish'>Fill your complete email</h2>
                        <span className='font-lg text-slate-400 font-mulish'>
                            set your new password
                        </span>
                    </div>
                    <form className='mt-12 m-auto flex flex-col lg:block'>
                        <div>
                            <label for="password" className='flex flex-col mb-5 password font-mulish'>Password</label>
                            <div className='relative'>
                                <input onChange={this.fillActive}type="password" name='password' className='inputSignIn password' id='password' placeholder='Write your password' />
                                <FiEye className='absolute top-5 right-5 h-5 w-5 cursor-pointer' />
                            </div>
                        </div>
                        <div className='mt-10'>
                            <label for="password" className='flex flex-col mb-5 password font-mulish'>Confirm Password</label>
                            <div className='relative'>
                                <input type="password" name='password' className='inputSignIn password' id='password' placeholder='Write your confirm password' />
                                <FiEye className='absolute top-5 right-5 h-5 w-5 cursor-pointer' />
                            </div>
                        </div>
                        <button onClick={this.active}className='bg-blue-500 rounded h-11 mt-16 text-white w-full font-mulish hover:scale-[1.05]' type='button'>Sign In</button>
                    </form>
                </section>
            </div>
        )
    }
}


export default ResetPassword;
