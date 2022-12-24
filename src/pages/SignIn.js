import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputEmail from './component/inputFormComponent/InputEmail';
import InputPassword from './component/inputFormComponent/InputPassword';


import { useDispatch } from 'react-redux';
import { login as loginAct } from '../redux/reducers/auth';



const SignIn = () => {
    const dispatch = useDispatch();


    const [alert, setAlert] = React.useState(false);
    const [succes, setSuccess] = React.useState(false);
    const navigate = useNavigate()


    const login = (event) => {
        const { value: email } = event.target.email;
        const { value: password } = event.target.password;

        dispatch(loginAct("secretToken"));

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

    const SignUp = () => {
    navigate('/sign-up')
    }
    
    const resetPass = () => {
        navigate('/reset')
    }

    return (
        <div className='lg:flex lg:flex-cols-2 md:gap-x-7 w-full font-inter md:justify-evenly'>
            <section className="hidden bg-[url('../../Assets/Image/image1.png')] md:bg-cover     bg-no-repeat md:h-[30rem] md:block lg:block lg:h-screen lg:w-full lg:bg-cover">
                <div className='bg-blue-800/50 lg:w-full h-full flex flex-col justify-center items-center'>
                    <span className='text-white text-8xl font-bold'>MMId</span>
                    <span className='text-white text-4xl'>wait, watch, wow!</span>
                </div>
            </section>
            <section className='mx-5 mt-10 lg:w-[50rem]'>
                <div className="md:mt-5">
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
                <form onSubmit={login} className='mt-12 m-auto flex flex-col gap-10 lg:block'>
                    <div className="flex flex-col gap-10">
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
                    <button type='submit' className='bg-blue-500 rounded h-11 w-full mt-9 text-white font-mulish hover:scale-[1.05]'>Sign In</button>
                </form>
                <div className='flex flex-col ont-lg text-slate-400 text-center mt-5'>
                    <p className='mb-3 font-mulish'>Forgot your password? <span onClick={resetPass} className="hover:scale-[1.05] hover:text-blue-700 cursor-pointer">Reset now</span></p>
                    <p className='font-mulish'>Don't have an account? <span onClick={SignUp} className="hover:scale-[1.05] hover:text-blue-700 cursor-pointer">Sign Up</span></p>
                </div>
            </section>
        </div>
    )
}


export default SignIn;

