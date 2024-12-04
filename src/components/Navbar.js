import myimage from '../images/myicon.png'
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar()
{

    return(
    <>
        <div className="navbar bg-base-100">
            <div className="flex-none">
                <div className="dropdown">
                    <div tabIndex={0} className="btn m-1">
                        <GiHamburgerMenu size={30}/>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-5 shadow-2xl outline outline-offset-2 outline-2 my-auto">
                        <li><a>Previous Panels</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Feedback</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1">
            <a className="btn btn-ghost text-xl">Test Site</a>
            {/*<img src={myimage} alt="fun little pixelart me" width={100} height={100}/>*/}
            </div>
            <div className='flex-none'>
                <a href='https://forms.gle/pWJQsidGJaH6xAth8' target='_blank'>Give me Panel Feedback!</a>
            </div>
        </div>
    </>
    );
}

export default Navbar