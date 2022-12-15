import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePageNav = () => {
    const navigate = useNavigate;

    const orderHistory = () => {
        navigate('/order-History')
    }

        const accountSetting = () => {
        navigate('/profile')
    }
        return (
            <div className='flex gap-5 font-mulish items-center h-20 p-10 text-[#AAAAAA]'>
                <a href="./profile"><span onClick={accountSetting} className='hover:text-[#000] hover:underline underline-offset-[34px] decoration-[#5F2EEA] cursor-pointer'>
                    Account Settings
                </span></a>
                <a href='./order-history'><span onClick={orderHistory} className='hover:text-[#000] hover:underline underline-offset-[34px] decoration-[#5F2EEA] cursor-pointer'>
                    Order History
                </span></a>
            </div>
        )
    }

export default ProfilePageNav;
