import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';

const PaymentPage = () => {
    const navigate = useNavigate;

    const prev = () => {
        navigate('/oreder')
    }

        return (
            <>
                <Header nav1="Home" nav2="List Movie"/>
                <main className='grid-order-page border-[1px] border-black p-5'>
                    <section className='flex flex-col gap-5 border-[1px] border-black'>
                        <h2 className='movieSelected-paymentInfo'>Payment Info</h2>
                        <div className='grid grid-cols-2 gap-10 my-10 '>
                            <div className='text-[#6B6B6B]'>Date & time</div>
                            <div>Tuesday, 07 July 2020 at 02:00 </div>
                            <div className='text-[#6B6B6B]'>Movie title</div>
                            <div>Spider-Man: Homecoming</div>
                            <div className='text-[#6B6B6B]'>Cinema name</div>
                            <div>CineOne21 Cinema</div>
                            <div className='text-[#6B6B6B]'>Number of tickets</div>
                            <div>3 pieces</div>
                            <div className='text-[#6B6B6B]'>Total payment</div>
                            <div>$30,00</div>
                        </div>
                        <h2 className='font-semibold lg:w-[30rem] my-10'>Choose a Payment Method</h2>
                        <div className='flex flex-wrap gap-10 mb-10 justify-center lg:grid lg:grid-cols-4 '>
                            <div className='paymentMethod'>
                                <img src={require('../Assets/Image/gpay.png')} alt="Goolge pay" />
                            </div>
                            <div className='paymentMethod'>
                                <img src={require('../Assets/Image/visa.png')} alt="Visa" />
                            </div>
                            <div className='paymentMethod'>
                                <img src={require('../Assets/Image/gopay.png')} alt="Gopay" />
                            </div>
                            <div className='paymentMethod'>
                                <img src={require('../Assets/Image/paypal.png')} alt="Paypal" />
                            </div>
                            <div className='paymentMethod'>
                                <img src={require('../Assets/Image/dana.png')} alt="Dana" />
                            </div>
                            <div className='paymentMethod'>
                                <img src={require('../Assets/Image/BCA.png')} alt="BCA" />
                            </div>
                            <div className='paymentMethod'>
                                <img src={require('../Assets/Image/Bri.png')} alt="Bri" />
                            </div>
                            <div className='paymentMethod'>
                                <img src={require('../Assets/Image/ovo.png')} alt="Ovo" />
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-5 mb-10'>
                            <div className='flex justify-center items-center gap-5'>
                                <hr className='lg:w-[20rem] bg-[#DEDEDE]' />
                                <span className='text-[#A0A3BD]'>or</span>
                                <hr className='lg:w-[20rem] bg-[#DEDEDE]' />
                            </div>
                            <span className='text-[#A0A3BD]'>Pay via cash. See how it work</span>
                        </div>
                        <div className="flex flex-row justify-evenly lg:justify-between">
                            <a href="./order"><button onClick={prev} type="submit" className="rounded-[2px] w-32 lg:w-[15rem] h-10 text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white border-[1px] border-[#5F2EEA]">Prvious step</button></a>
                            <a href="./order-History"><button type="submit" className="rounded-[2px] w-32 lg:w-[15rem] h-10 text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white border-[1px] border-[#5F2EEA]">Pay your order</button></a>
                        </div>
                    </section>
                    <section>
                        <h2 className='movieSelected-paymentInfo mb-[3.8rem]'>Personal Info</h2>
                        <div>
                            <div className='flex flex-col'>
                                <label htmlFor="fullname">Fullname</label>
                                <input type="text" id="fullname" className='personalInfo-input'/>
                            </div>
                            <div className='flex flex-col my-5'>
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' className='personalInfo-input'/>
                            </div>
                            <div className='flex flex-col my-5'>
                                <label htmlFor="phone">Phone Number</label>
                                <div className='flex justify-center items-center border-[1px] border-[#DEDEDE]'>
                                    <input type="text" value='+62' disabled className='text-center h-12 w-12 ' />
                                    <hr className='h-7 w-[2px] bg-[#dedede]'/>
                                    <input type="tel" id='phone' className='h-12 w-full outline-none p-5'/>
                                </div>
                            </div>
                            <div className='flex h-12 items-center justify-center border-[1px] border-[#DEDEDE] px-5 gap-5 bg-[#f4b84075]'>
                                <img src={require('../Assets/Image/alert.png')} alt="" />
                                <span className='text-[#4E4B66]'>Fill your data correctly.</span>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
}




export default PaymentPage;