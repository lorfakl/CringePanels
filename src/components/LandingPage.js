import React, { useState, useEffect } from "react";
import BannerImage from '../images/Kaizen_Panel_Banner.png'


function LandingPage()
{


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const [nextConvention, setNextConvention] = useState({ //this useState will eventually be used in an api endpoint so that I can update the code from 
        conventionName: "Triad Con",
        conventionDate: new Date("2025-03-28T13:00:00"),
        conventionLink: 'https://triadanimecon.com/'
    })

    const targetDate = new Date("2025-03-28T13:00:00").getTime();

    useEffect(()=>{},[]); //this is the useEffect to get the what the target date should be on page load 
    
    useEffect(() =>{
        const countDownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = nextConvention.conventionDate - now;
      
            if (distance <= 0) {
              clearInterval(countDownInterval);
              setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
              return;
            }
      
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
            setTimeLeft({ days, hours, minutes, seconds });
          }, 1000);
      
          return () => clearInterval(countDownInterval); // Cleanup the interval on unmount
    },[targetDate])

    return(
        <>
            <div className="flex flex-col bg-neutral min-h-screen overflow-hidden">
                <div className="mx-auto">
                    <p className="text-5xl lg:text-7xl">We'll be at <a href={nextConvention.conventionLink} target='_blank' className="font-semibold underline underline-offset-4">{nextConvention.conventionName}</a></p>
                </div>

                <div className="mx-auto py-10">
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                            <span style={{"--value":timeLeft.days}}></span>
                            </span>
                            days
                        </div>

                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                            <span style={{"--value":timeLeft.hours}}></span>
                            </span>
                            hours
                        </div>

                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                            <span style={{"--value":timeLeft.minutes}}></span>
                            </span>
                            min
                        </div>

                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{"--value":timeLeft.seconds}}></span>
                            </span>
                            sec
                        </div>

                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-x-16 justify-center bg-neutral">
                

                <div className="card bg-neutral place-self-center w-96 lg:card-side lg:w-1/2 lg:h-1/4 shadow-xl ">
                    <figure>
                        <img src={BannerImage} alt="Kaizen Panels!" />
                    </figure>
                    <div className="card-body h-1/4">
                        <h2 className="card-title lg:text-3xl">Want us at a Convention near you?</h2>
                        <p className="h-1/4">Send an email to your local convention and tell them to invite us. You will need to find their email though, because we dont know where you live</p>
                        <div className="card-actions justify-end lg:justify-start">
                            <a 
                                className="font-semibold text-2xl underline underline-offset-8" 
                                href="mailto:conventionprogramming@exampleconvention.com?subject=Please%20Invite%20Kaizen%20Panels">
                                <button className="btn btn-accent">Email your local convention</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col place-items-center gap-y-4">
                    <div className="font-semibold underline text-3xl">Stats for Nerds</div>

                    <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat">
                            <div className="stat-title">Panels Presented</div>
                            <div className="stat-value">17</div>
                            <div className="stat-desc">March 2023 - May 2025</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Hours of Content</div>
                            <div className="stat-value">170</div>
                            <div className="stat-desc">March 2023 - May 2025</div>
                        </div>
                        {/* 
                        <div className="stat">
                            <div className="stat-title">Average Rating</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                        */}
                    </div>
                </div>
                
            </div>
            </div>
            
        </>
    );
}

export default LandingPage