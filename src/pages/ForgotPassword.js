import React, { Component } from 'react';


class ForgotPassword extends Component {
    render() {
        return (
            <div className='grid grid-cols-[800px_minmax(100px,_1fr)_400px]  gap-x-7 h-screen w-full font-inter justify-evenly'>
                <section className="bg-[url('../../Assets/Image/image1.png')] bg-indigo-500 pl-14">
                    <div className='bg-blue-800/50 w-full h-full flex flex-col justify-start items-start py-10 px-16'>
                        <img src={require('../Assets/Image/tickitz1.png')} alt="Background" className='w-52 mb-11' />
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
                                    <div className='circle'>1</div>
                                    <div className='fontForgot'>Fill your complete email</div>
                                </div>
                                <div className='line'></div>
                                <div className='center'>
                                    <div className='circle'>2</div>
                                    <div className='fontForgot'>Check your email</div>
                                </div>
                                <div className='line'></div>
                                <div className='center'>
                                    <div className='circle'>3</div>
                                    <div className='fontForgot'>Enter your new password</div>
                                </div>
                                <div className='line'></div>
                                <div className='center'>
                                    <div className='circle'>4</div>
                                    <div className='fontForgot'>Done</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='pl-9 m-auto'>
                    <div className="mt-5">
                        <h2 className='text-3xl mb-2 font-bold font-mulish'>Fill your complete email</h2>
                        <span className='font-lg text-slate-400 font-mulish'>
                            we'll send a link to your email shortly
                        </span>
                    </div>
                    <form className='mt-12 m-auto'>
                        <div className='pb-5'>
                            <label className='flex flex-col mb-5 font-mulish'  for="email">Email</label>
                            <input type="email" name='email' className='inputSignIn' id='email' placeholder='Write your email'/>
                        </div>
                        <button className='bg-blue-500 rounded h-11 w-96 mt-9 text-white w-full font-mulish hover:scale(1.1)' type='button'>Sign In</button>
                    </form>
                </section>
            </div>
        )
    }
}


export default ForgotPassword;
