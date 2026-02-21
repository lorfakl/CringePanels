import PlaceHolderImage from '../images/PlaceHolderImages.webp'
import myicon from '../images/myicon.png'
import shygal from '../images/shygal.jpg'
import artisticdirector from '../images/artisticdirector.png'
function About()
{
    return(
    <>
    <div className="flex flex-col bg-neutral place-items-center min-h-screen">
        <div className="p-16 place-items-center">
            <hi className="font-bold underline text-center text-2xl lg:text-5xl">Meet the Team!</hi>
            <p className="text-center text-wrap py-4">Based out of Charlotte North Carolina, we started doing panels in 2023(at Triadcon) with a random panel about video game development. 
                Since then, we have been trying to do as many panels as possible in the southeast region. With the goal of becoming the best panelists. </p>
                <button className="btn lg:btn-wide lg: btn-primary">Contact Us!</button>
        </div>
        <div className="flex flex-col xl:flex-row bg-neutral">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={myicon} className="w-[280px] h-[280px] rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Main Host</h1>
                        <p className="py-6">
                            I am Jahad (I made the site), the main host of any Kaizen Panels Production. Panel concepts from right from my dome. Started doing this because, ever since 
                            my first Ichibancon 2014 I've loved the panels, literally my favorite thing so Im just trying to put on productions in which people have a good time. 
                            With an eye on doing panels in ways I've never seen before. 
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={shygal} className="w-[200px] h-[280px] rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Chief Organizational Officer</h1>
                        <p className="py-6">
                            This is Kaizen Panel's Chief Organizational Officer, Merry Mallan. The reason why any of these panels happen or even exist is thanks to her. She does everything, 
                            from booking rooms, to making sure panel submissions are sent in on time. Without her Kaizen Panels would be NOTHING!
                            So if its at the panels or if you see her around the convention hall be sure to thank her. She is a prolific cosplayer She likes frogs and Shrek.  
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                <img src={artisticdirector} className="w-[200px] h-[280px] rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Artistic Director</h1>
                        <p className="py-6">
                            This is Kaizen Panel's Artistic Director, <a href="https://www.instagram.com/pen.saga/" className="underline underline-offset-4">Pen.Saga</a>. Everything you see here, the banner, the favicon, even the colors all from his brain.  
                            Everything you see in the panels, was either touched by him or approved by him. I am not good at PowerPoint. Thank him. Sometimes he's even in the artist alley so be sure to stop by check out his non-panel related art.  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

        
    </>
    );
}

export default About