import { useEffect, useState, useRef } from 'react';
import myimage from '../images/myicon.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router';

function Navbar()
{
    const [menuStatus, setMenuStatus] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutsideDropdown(event) {
            console.log("detected a click outside the dropdown element ", event.target)
            if(dropdownRef && !dropdownRef.current.contains(event.target))
            {
                console.log("valid click outside of dropdown")
                if (menuStatus) {
                    closeMenu()
                }
            }
        }
        
        // Add event listener when menu is open
        document.addEventListener('mousedown', handleClickOutsideDropdown);
        
        // Clean up on unmount
        return () => { document.removeEventListener('mousedown', handleClickOutsideDropdown) }
    
    }, [])

    const closeMenu = () => setMenuStatus(false)
    
    const toggleMenu = () => {
        if(menuStatus)
        {
            setMenuStatus(false)
        }
        else
        {
            setMenuStatus(true)
        }
    }

    function handleOffClickEdgeCase(){
        console.log("Clicked previous panels")
    }

    return(
    <>
        <div className="navbar bg-base-100">
            <div className="flex-none" ref={dropdownRef}>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1" onClick={toggleMenu}>
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
            {/*<Link to="/" className="btn text-5xl">Cringe Panels</Link>*/}
            {/*<img src={myimage} alt="fun little pixelart me" width={100} height={100}/> */}
            </div>
            <div className='flex-none'>
                <a href='https://forms.gle/pWJQsidGJaH6xAth8' target='_blank'>Give me Panel Feedback!</a>
            </div>
        </div>
    </>
    );
}

export default Navbar