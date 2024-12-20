import { useState } from 'react';
import myimage from '../images/myicon.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router';

function Navbar()
{
    const [menuStatus, setMenuStatus] = useState(false)

    const openMenu = () => setMenuStatus(true)
    const closeMenu = () => setMenuStatus(false)

    return(
    <>
        <div className="navbar bg-base-100">
            <div className="flex-none">
                <div className="dropdown">
                    <div tabIndex={0} className="btn m-1" onClick={openMenu}>
                        <GiHamburgerMenu size={30}/>
                    </div>
                    {menuStatus ? 
                    <>
                    <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-5 shadow-2xl outline outline-offset-2 outline-2 my-auto">
                        <li>
                            <Link to="About" onClick={closeMenu}>About</Link>
                        </li>
                        <li>
                            <Link to="Contact" onClick={closeMenu}>Contact</Link>
                        </li>
                        <li>
                            <Link to="Feedback" onClick={closeMenu}>Feedback</Link>
                        </li>
                        <li>
                            <Link to="PanelHistory" onClick={closeMenu}>Previous Panels</Link>
                        </li>
                    </ul>
                    </> 
                    : 
                    null
                    }
                    
                </div>
            </div>
            <div className="flex-1">
            <Link to="/" className="btn text-5xl">Cringe Panels</Link>
            <img src={myimage} alt="fun little pixelart me" width={100} height={100}/>
            </div>
            <div className='flex-none'>
                <a href='https://forms.gle/pWJQsidGJaH6xAth8' target='_blank'>Give me Panel Feedback!</a>
            </div>
        </div>
    </>
    );
}

export default Navbar