import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn.js';
import Homepage from './pages/Homepage.js';
import SignUp from './pages/signUp.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ResetPassword from './pages/ResetPassword.js';
import ViewAll from './pages/ViewAll.js';
import MovieDetailsPage from './pages/MovieDetailsPage';
import OrderPage from './pages/OrderPage.js';
import PaymentPage from './pages/PaymentPage.js';
import ProfilePage from './pages/ProfilePage.js';
import OrderHistoryPage from './pages/OrderHistoryPage.js';
import TicketResult from './pages/TicketResult.js';
import ManageMovie from './pages/ManageMovie.js';






function App() {
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

export default App;
