import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
    <div className='flex flex-col'>
      <div>
        <Navbar/>
      </div>
      <div className='mx-auto'>
        <LandingPage/>
      </div>
    </div>
    {/*
    <Router>
      <Navbar/>
      <Routes>
        <Route path="home" Component={<LandingPage/>} />
      </Routes>
    </Router>*/}
    </>
  );
}

export default App;
