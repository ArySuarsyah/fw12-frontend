import React, { Component } from 'react';
import InputEmail from './components/inputFormComponent/InputEmail';
import InputFirstName from './components/inputFormComponent/InputFirstName';
import InputLastName from './components/inputFormComponent/InputLastName';
import InputPassword from './components/inputFormComponent/InputPassword';
import InputPhone from './components/inputFormComponent/InputPhone';

import { Link } from 'react-router-dom';







class SignUp extends Component {
    render() {



        return (
            <div className='grid lg:grid-cols-[800px_minmax(400px,_1fr)_0px] h-screen w-full font-inter lg:justify-between'>
                <section className="hidden bg-[url('../../Assets/Image/image1.png')] md:bg-cover     bg-no-repeat md:h-[30rem] md:block lg:block lg:h-screen lg:w-full lg:bg-cover">
                    <div className='bg-blue-800/50 w-full h-full flex flex-col justify-center items-center'>
                        <span className='text-white text-8xl font-bold'>MMId</span>
                        <span className='text-white text-4xl'>wait, watch, wow!</span>
                    </div>
                </section>
                <section className='lg:overflow-y-scroll mx-5 mt-10 font-mulish'>
                    <section className='mx-5 md:mt-5'>
                        <h2 className='text-3xl mb-2 font-bold'>Sign Up</h2>
                        <span className='font-lg text-slate-400'>
                            Fill your additional details
                        </span>
                        <form className='mt-12'>
                            <div className='pb-5'>
                                <InputFirstName
                                    labelClass='labelInput'
                                    firstNameClass='inputSignUp'
                                />
                            </div>
                            <div className='pb-5'>
                                <InputLastName
                                    labelClass='labelInput'
                                    lastNameClass='inputSignUp'
                                />
                            </div>
                            <div className='pb-5'>
                                <InputPhone
                                    labelClass='labelInput'
                                    phoneClass='inputSignUp'
                                />
                            </div>
                            <div className='pb-5'>
                                <InputEmail
                                    labelClass='labelInput'
                                    emailClass='inputSignUp'
                                />
                            </div>
                            <div>
                                <InputPassword
                                    labelClass='labelInput'
                                    passwordClass='inputSignUp'
                                />
                            </div>
                            <button className='bg-blue-500 rounded-[16px] h-11 w-full mt-9 text-white hover:scale-[1.05]' type='button'>Sign In</button>
                        </form>
                        <div className='flex flex-col ont-lg text-slate-400 text-center my-10'>
                            <p>Forgot your password? <Link to="/sign-in" className='text-blue-400 cursor-pointer'>Reset</Link></p>
                            <p>Have an account? <Link to="/sign-in" className='text-blue-400 cursor-pointer'>Sign In</Link></p>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}
//cek kembali footer pada signUp

export default SignUp;
