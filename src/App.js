import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About'
import Contact from './components/Contact'
import Feedback from './components/Feedback'
import PanelHistory from './components/PanelHistory'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Feedback" element={<Feedback/>} />
        <Route path="/PanelHistory" element={<PanelHistory/>} />
      </Routes>
    </BrowserRouter>
    
    {/*
    <div className='flex flex-col'>
      <div>
        <Navbar/>
      </div>
      <div className='mx-auto'>
        <LandingPage/>
      </div>
    </div>
    
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
