import { FaYoutube, FaInstagram, FaTiktok, FaTwitch, FaTwitter } from "react-icons/fa";

function Contact()
{
    const socials = [
        {name: "twitter/X", icon: <a href="https://x.com/kalebdevhad?lang=en"><FaTwitter size={30} /></a>}, 
        {name: "instagram", icon: <a href="https://www.instagram.com/kalebjahad/"><FaInstagram size={30}/></a>}, 
        {name: "youtube", icon: <a href="https://www.youtube.com/@kalebjahad"><FaYoutube size={30}/></a> },
        {name: "tiktok", icon: <a href="https://www.tiktok.com/@kalebjahad"><FaTiktok size={30}/></a>}, 
        {name: "twitch", icon: <a href="https://www.twitch.tv/kalebjahad"><FaTwitch size={30}/></a>}
    ]
    
    return(<>
        <div className="bg-neutral flex flex-col items-center gap-y-8 min-h-screen">
            <div className="">
                <h1 className="font-bold text-6xl">Contact</h1>
            </div>
            <div>
                <a className="font-semibold text-2xl underline underline-offset-8" href="mailto:kaleb.zahad@gmail.com?">
                Send Me Mail
                </a>
            </div>
            <div><h1 className="font-semibold text-2xl">Socials!</h1></div>
            <div>
                <div className="flex flex-col md:flex-row gap-x-10">
                    {socials.map((platform)=>(
                        <div>
                            <div className="place-items-center">
                                {platform.icon}
                                <h1 className="font-semibold text-xl">{platform.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>);
}

export default Contact