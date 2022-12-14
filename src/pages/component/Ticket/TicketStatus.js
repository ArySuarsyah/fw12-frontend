import React from 'react'

const TicketStatus = (props) => {
    return (
        <section className='flex justify-center items-center w-full py-5 my-10'>
            <div className='flex justify-center items-center flex-col font-mulish w-[50rem]'>
                <span className='font-semibold mb-10'>Proof of Payment</span>
                <div className=' w-[40rem] h-[15.9rem] overflow-hidden'>
                    <div className='grid grid-cols-[400px_minmax(235px,_1fr)_100px] bg-[#5F2EEA] h-20 rounded-tr-[16px] rounded-tl-[16px] border-l-[1px] border-t-[1px] border-r-[1px] border-[#dedede] relative'>
                        <div className='flex items-center justify-between px-10'>
                            <img src={props.logo} alt="Brand" className='w-[8rem] h-[3rem]' />
                            <span className='text-white'>Admit One</span>
                        </div>
                        <div className='flex justify-center items-center h-20 w-[15rem] border-l-[1px] border-dashed border-[#dedede]'>
                            <div className='bg-white h-7 w-7 rounded-[50%] border-l-[1px] border-b-[1px] border-r-[1px] top-[-1rem] left-[24.2rem]  absolute'></div>
                            <img src={props.logo} alt="Brand" className='w-[8rem] h-[3rem]'/>
                        </div>
                    </div>
                    <div className='grid grid-cols-[360px_minmax(235px,_1fr)_100px] border-[1px] rounded-bl-[16px] rounded-br-[16px] px-10 bg-white font-mulish relative'>
                        <div className='mt-2 pb-6'>
                            <div>
                                <span className='text-[#AAAAAA] text-[10px]'>Movie</span>
                                <h2 className='text-[14px]'>{props.movie}</h2>
                            </div>
                            <div className='grid grid-cols-3 gap-2'>
                                <div>
                                    <span className='text-[#AAAAAA] text-[10px]'>Date</span>
                                    <h3 className='text-[13px]'>{props.date}</h3>
                                </div>
                                <div>
                                    <span className='text-[#AAAAAA] text-[10px]'>Time</span>
                                    <h3 className='text-[13px]'>{props.time}</h3>
                                </div>
                                <div>
                                    <span className='text-[#AAAAAA] text-[10px]'>Category</span>
                                    <h3 className='text-[13px]'>{props.category}</h3>
                                </div>
                                <div>
                                    <span className='text-[#AAAAAA] text-[10px]'>Count</span>
                                    <h3 className='text-[13px]'>{props.count}</h3>
                                </div>
                                <div>
                                    <span className='text-[#AAAAAA] text-[10px]'>Seats</span>
                                    <h3 className='text-[13px]'>{props.seats}</h3>
                                </div>
                                <div>
                                    <span className='text-[#AAAAAA] text-[10px]'>Price</span>
                                    <h3 className='text-[13px] font-bold'>{props.price}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full border-l-[1px] border-dashed border-[#dedede]'>
                            <img src={props.status} alt="" className='w-40 bg-[#F5F6F8]' />
                            <div className='bg-white h-7 w-7 rounded-[50%] border-l-[1px] border-t-[1px] border-r-[1px] bottom-[-1rem] left-[24.2rem]  absolute'>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TicketStatus


