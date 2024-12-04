import logo from './logo.svg';
import './App.css';


import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className='flex flex-col'>
      <div>
        <Navbar/>
      </div>
      <div className='mx-auto'>
        <LandingPage/>
      </div>
    </div>


  );
}

export default App;
