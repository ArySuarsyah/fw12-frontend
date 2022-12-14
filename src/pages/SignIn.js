import React, { Component } from 'react';
import { FiEye } from "react-icons/fi";


class SignIn extends Component {
    render() {
        return (
            <div className='grid grid-cols-[800px_minmax(100px,_1fr)_400px]  gap-x-7 h-screen w-full font-inter justify-evenly'>
                <section className="bg-[url('../../Assets/Image/image1.png')] bg-indigo-500">
                    <div className='bg-blue-800/50 w-full h-full flex flex-col justify-center items-center'>
                        <img src={require('../Assets/Image/tickitz1.png')} alt="Backgroun" className='w-2/4' />
                        <span className='text-white text-4xl'>wait, watch, wow!</span>
                    </div>
                </section>
                <section className='pl-9 m-auto'>
                    <div className="mt-10">
                        <h2 className='text-3xl mb-2 font-bold font-mulish'>Sign In</h2>
                        <span className='font-lg text-slate-400 font-mulish'>
                            Fill your additional details
                        </span>
                    </div>
                    <form className='mt-12 m-auto'>
                        <label class="block">
                            <div className='pb-5'>
                                <label className='flex flex-col mb-5 font-mulish'  for="email">Email</label>
                                <input type="email" name='email' className='inputSignIn' id='email' placeholder='Write your email' />
                            </div>
                            <div className='relative'>
                                <label className='flex flex-col mb-5 password font-mulish'  for="password">Password</label>
                                <input type="password" name='password' className='outline-none focus:ring-2 border-2 border-gray-300 rounded h-14 w-96 pl-4 password' id='password' placeholder='Write your password' />
                                <FiEye className='absolute h-5 w-5 top-16 right-5'/>
                            </div>
                        </label>
                        <button className='bg-blue-500 rounded h-11 w-96 mt-9 text-white font-mulish hover:scale(1.1)' type='button'>Sign In</button>
                    </form>
                    <div className='flex flex-col ont-lg text-slate-400 text-center mt-5'>
                        <p className='mb-3 font-mulish'>Forgot your password? <span>Reset now</span></p>
                        <p className='font-mulish'>Don't have an account? <span>Sign Up</span></p>
                    </div>
                </section>
            </div>
        )
    }
}


export default SignIn;

