import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn.js';
import Homepage from './pages/Homepage.js';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
