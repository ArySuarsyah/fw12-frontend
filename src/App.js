import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn.js';
import Homepage from './pages/Homepage.js';
import SignUp from './pages/signUp.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ResetPassword from './pages/ResetPassword.js';
import ViewAll from './pages/ViewAll.js';
import MovieDetailsPage from './pages/MovieDetailsPage';
import OrderPage from './pages/OrderPage.js';







function App() {
    return (
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

            </Routes>
        </BrowserRouter>
    )
};

export default App;
