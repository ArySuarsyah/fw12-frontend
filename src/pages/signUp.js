import React, { Component } from 'react';
import { FiEye } from "react-icons/fi";

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
                <section className='overflow-y-scroll py-10 pl-10 box-border'>
                    <section>
                        <h2 className='text-3xl mb-2 font-bold font-mulish'>Sign Up</h2>
                        <span className='font-lg text-slate-400 font-mulish'>
                            Fill your additional details
                        </span>
                        <form className='mt-12 m-auto'>
                            <div className='pb-5'>
                                <label for="firstName" className='flex flex-col mb-5 font-mulish'>First Name</label>
                                <input type="text" name='firstname' className='inputSignUp' id='firstName' placeholder='Write your first name'/>
                            </div>
                            <div className='pb-5'>
                                <label for="lastName" className='flex flex-col mb-5 font-mulish'>Last Name</label>
                                <input type="text" name='lastname' className='inputSignUp' id='lastName' placeholder='Write your last name'/>
                            </div>
                            <div className='pb-5'>
                                <label for="phone" className='flex flex-col mb-5 font-mulish'>Phone Number</label>
                                <input type="tel" name='phone' className='inputSignUp' id='phone' placeholder='Write your phone number'/>
                            </div>
                            <div className='pb-5'>
                                <label for="email" className='flex flex-col mb-5 font-mulish'>Email</label>
                                <input type="email" name='email' className='inputSignUp' id='email' placeholder='Write your email'/>
                            </div>
                            <div>
                                <label for="password" className='flex flex-col mb-5 password font-mulish'>Password</label>
                                <div className='relative w-96'>
                                    <input type="password" name='password' className='inputSignUp' id='password' placeholder='Write your password' />
                                    <FiEye className='absolute top-5 right-5 h-5 w-5 cursor-pointer' />
                                </div>
                            </div>
                            <button className='bg-blue-500 rounded-[16px] h-11  mt-9 text-white w-full font-mulish hover:scale(1.1)' type='button'>Sign In</button>
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
