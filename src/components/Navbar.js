import { useEffect, useState, useRef } from 'react';
import myimage from '../images/myicon.png'
import NavbarBanner from '../images/NavbarBanner.webp'
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
        <div className="navbar flex flex-wrap items-center justify-between p-2 bg-secondary sticky top-0 z-10 ">
          {/* Hamburger Menu */}
          <div className="flex-none order-1" ref={dropdownRef}>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden m-1" onClick={toggleMenu}>
                <GiHamburgerMenu size={24}/>
              </div>
              {menuStatus ? 
                <ul tabIndex={0} className="menu dropdown-content bg-secondary rounded-box z-[1] w-52 shadow-2xl mt-2">
                  <li><Link to="About" onClick={closeMenu}>About</Link></li>
                  <li><Link to="Contact" onClick={closeMenu}>Contact</Link></li>
                  <li><Link to="Feedback" onClick={closeMenu}>Feedback</Link></li>
                  <li><Link to="PanelHistory" onClick={closeMenu}>Previous Panels</Link></li>
                </ul> 
                : null
              }
            </div>
          </div>
          
          {/* Logo and Brand  flex justify-center lg:justify-start items-center flex-1  */}
          <div className="order-2 lg:order-1 flex-shrink-0 overflow-hidden max-w-[250px] sm:max-w-[300px] md:max-w-[350px]">
            <Link to="/" className="btn btn-ghost normal-case text-2xl sm:text-3xl md:text-4xl lg:text-5xl mr-2">
              <img src={NavbarBanner} alt="fun little pixelart me" className="w-full max-w-[300px] h-full object-contain sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] object-contain"/> 
            </Link>
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