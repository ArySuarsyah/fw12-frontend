import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Homepage'


class SignIn extends Component {
    render() {
        return (
            // <Router>
                <div className='grid grid-cols-[850px_minmax(100px,_1fr)_100px] gap-x-7 h-screen w-full font-inter justify-evenly'>
                        <section className='bg-indigo-800 opacity-80 flex flex-col justify-center items-center'>
                            <img src={require('../Assets/Image/tickitz1.png')} alt="Backgroun"className='w-2/4'/>
                            <span className='text-white text-xl'>wait, watch, wow!</span>
                        </section>
                        <section className='pl-12 m-auto'>
                                <div className=' headerForm'>
                                    <h2 className='text-3xl font-bold'>Sign In</h2>
                                    <span className='font-lg text-slate-400'>
                                        Sign in with your data that you entered during your registration
                                    </span> 
                                </div>
                                <form className='mt-14 m-auto'>
                                    <label class="block">
                                        <div className='pb-5'>
                                            <label className='flex flex-col lebel mb-5'  for="email">Email</label>
                                            <input type="email" name='peer-invalid:visible email' className='outline-none focus:ring-2 border-2 border-gray-300 rounded h-14 w-full pl-4' id='email' placeholder='Write your email'/>
                                        </div>
                                        <div>
                                            <label className='flex flex-col lebel mb-5 password'  for="password">Password</label>
                                            <input type="password" name='password' className='outline-none focus:ring-2 border-2 border-gray-300 rounded h-14 w-96 pl-4 w-full password' id='password' placeholder='Write your password'/>
                                        </div>
                                    </label>
                                    <button className='bg-blue-500 rounded h-11 w-96 mt-9 text-white w-full' type='submit'>Sign In</button>
                                </form>
                            <div className='flex flex-col ont-lg text-slate-400 text-center mt-5'>
                                <p className='mb-3'>Forgot your password? <span>Reset now</span></p>
                                <p>Don't have an account? <span>Sign Up</span></p>
                            </div>
                        </section>
                </div>
            //     <Route path="/" Component={Homepage} />
            //     <Route path="/Homepage" Component={SignIn} />
            // </Router>
        )
    }
}


export default SignIn;
