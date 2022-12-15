import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputEmail from './component/inputFormComponent/InputEmail';
import InputPassword from './component/inputFormComponent/InputPassword';


const SignIn = () => {
    const [alert, setAlert] = React.useState(false);
    const [succes, setSuccess] = React.useState(false);
    const navigate = useNavigate()


    const login = (event) => {
        const { value: email } = event.target.email;
        const { value: password } = event.target.password;

        if (email === 'admin@email' && password === '12345678') {
            setSuccess(true);
            setInterval(() => {
                navigate('/');
            }, 3000)
        } else {
            setAlert(true)
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }

            event.preventDefault();
    }

    return (
        <div className='grid grid-cols-[800px_minmax(100px,_1fr)_400px]  gap-x-7 h-screen w-full font-inter justify-evenly'>
            <section className="bg-[url('../../Assets/Image/image1.png')] bg-cover bg-no-repeat">
                <div className='bg-blue-800/50 w-full h-full flex flex-col justify-center items-center'>
                    <img src={require('../Assets/Image/tickitz1.png')} alt="Background" className='w-2/4' />
                    <span className='text-white text-4xl'>wait, watch, wow!</span>
                </div>
            </section>
            <section className='pl-16 m-auto'>
                <div className="mt-10">
                    <h2 className='text-3xl mb-2 font-bold font-mulish'>Sign In</h2>
                    <span className='font-lg text-slate-400 font-mulish'>
                        Fill your additional details
                    </span>
                </div>
                {succes && (<div className='flex justify-center items-center h-32 w-96 bg-sky-700/60 top-0 absolute'>
                    <span>Login</span>
                </div>)}
                {alert && (<div className='flex justify-center items-center h-32 w-96 bg-red-700/60 top-0 absolute'>
                    <span>Wrong password or email</span>
                </div>)}
                <form onSubmit={login} className='mt-12 m-auto'>
                    <div>
                        <div className='pb-5'>
                            <InputEmail
                                labelClass='labelInput'
                                emailClass='inputSignIn' />
                        </div>
                        <div className='relative'>
                            <InputPassword
                                labelClass='labelInput'
                                passwordClass='inputSignIn'
                                icon='<FiEyeOff />'
                            />
                        </div>
                        </div>
                        <button type='submit' className='bg-blue-500 rounded h-11 w-96 mt-9 text-white font-mulish hover:scale(1.1)'>Sign In</button>
                    </form>
                    <div className='flex flex-col ont-lg text-slate-400 text-center mt-5'>
                        <p className='mb-3 font-mulish'>Forgot your password? <span>Reset now</span></p>
                        <p className='font-mulish'>Don't have an account? <span>Sign Up</span></p>
                    </div>
                </section>
            </div>
        )
    }


export default SignIn;

