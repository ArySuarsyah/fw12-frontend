import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './SignIn.js';
import Homepage from './Homepage.js';
import SignUp from './signUp.js';
import ForgotPassword from './ForgotPassword.js';
import ResetPassword from './ResetPassword.js';
import ViewAll from './ViewAll.js';
import MovieDetailsPage from './MovieDetailsPage';
import OrderPage from './OrderPage.js';
import PaymentPage from './PaymentPage.js';
import ProfilePage from './ProfilePage.js';
import OrderHistoryPage from './OrderHistoryPage.js';
import TicketResult from './TicketResult.js';
import ManageMovie from './ManageMovie.js';






function Main() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/sign-in' element={<SignIn />} />
                        <Route path='/sign-up' element={<SignUp />} />
                        <Route path='/forgot' element={<ForgotPassword />} />
                        <Route path='/reset' element={<ResetPassword />} />
                        <Route path='/view' element={<ViewAll />} />
                        <Route path='/details' element={<MovieDetailsPage />} />
                        <Route path='/order' element={<OrderPage />} />
                        <Route path='/payment' element={<PaymentPage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                        <Route path='/order-history' element={<OrderHistoryPage />} />
                        <Route path='/ticket' element={<TicketResult />} />
                        <Route path='/manage-movie' element={<ManageMovie />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
};

export default Main;
