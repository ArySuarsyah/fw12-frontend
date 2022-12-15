import React, { Component } from 'react';
import InputEmail from './component/inputFormComponent/InputEmail';
import InputFirstName from './component/inputFormComponent/InputFirstName';
import InputLastName from './component/inputFormComponent/InputLastName';
import InputPassword from './component/inputFormComponent/InputPassword';
import InputPhone from './component/inputFormComponent/InputPhone';

class SignUp extends Component {
    render() {
        return (
            <div className='grid grid-cols-[800px_minmax(400px,_1fr)_1px] h-screen w-full font-inter justify-between'>
                <section className="bg-[url('../../Assets/Image/image1.png')] bg-indigo-500 w-[50em]">
                    <div className='bg-blue-800/50 w-full h-full flex flex-col justify-center items-center'>
                        <img src={require('../Assets/Image/tickitz1.png')} alt="Backgroun" className='w-2/4' />
                        <span className='text-white text-4xl'>wait, watch, wow!</span>
                    </div>
                </section>
                <section className='overflow-y-scroll py-16 pl-5 box-border'>
                    <section className=' m-auto w-96'>
                        <h2 className='text-3xl mb-2 font-bold font-mulish'>Sign Up</h2>
                        <span className='font-lg text-slate-400 font-mulish'>
                            Fill your additional details
                        </span>
                        <form className='mt-12 m-auto'>
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
                            <button className='bg-blue-500 rounded-[16px] h-11 mt-9 text-white w-96 font-mulish hover:scale(1.1)' type='button'>Sign In</button>
                        </form>
                        <div className='flex flex-col ont-lg text-slate-400 text-center mt-5'>
                            <p className='mb-3 font-mulish'>Forgot your password? <span>Reset now</span></p>
                            <p className='font-mulish'>Don't have an account? <span>Sign Up</span></p>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}


export default SignUp;
