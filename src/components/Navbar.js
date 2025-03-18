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
                closeMenu()
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

    return(
        <>
        <div className="navbar bg-base-100 flex flex-wrap items-center justify-between p-2">
          {/* Hamburger Menu */}
          <div className="flex-none order-1" ref={dropdownRef}>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden m-1" onClick={toggleMenu}>
                <GiHamburgerMenu size={24}/>
              </div>
              {menuStatus ? 
                <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-5 shadow-2xl outline outline-offset-2 outline-2 mt-2">
                  <li><Link to="About" onClick={closeMenu}>About</Link></li>
                  <li><Link to="Contact" onClick={closeMenu}>Contact</Link></li>
                  <li><Link to="Feedback" onClick={closeMenu}>Feedback</Link></li>
                  <li><Link to="PanelHistory" onClick={closeMenu}>Previous Panels</Link></li>
                </ul> 
                : null
              }
            </div>
          </div>
          
          {/* Logo and Brand */}
          <div className="flex-1 order-2 lg:order-1 flex justify-center lg:justify-start items-center">
            <Link to="/" className="btn btn-ghost normal-case text-2xl sm:text-3xl md:text-4xl lg:text-5xl mr-2">
              Kaizen Panels
            </Link>
            <img src={myimage} alt="fun little pixelart me" className="w-16 h-12 sm:w-20 sm:h-16 md:w-25 md:h-20 lg:w-130 lg:h-100"/> 
          </div>
          
          
          
          {/* Desktop Menu - Hidden on Mobile */}
          <div className="hidden lg:flex flex-none order-3 ml-4">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="About">About</Link></li>
              <li><Link to="Contact">Contact</Link></li>
              <li><Link to="Feedback">Feedback</Link></li>
              <li><Link to="PanelHistory">Previous Panels</Link></li>
            </ul>
          </div>

          {/* Feedback Link */}
          <div className="flex-none order-4 ml-2">
            <a 
              href="https://forms.gle/pWJQsidGJaH6xAth8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm md:btn-md btn-outline"
            >
              Give me Panel Feedback!
            </a>
          </div>
        </div>
      </>
    );
}

export default Navbar