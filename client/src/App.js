import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import { Toaster } from 'react-hot-toast';
import Otp from './pages/otp';

function App() {
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
