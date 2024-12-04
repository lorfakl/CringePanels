import React, { useState, useEffect } from "react";



function LandingPage()
{


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const targetDate = new Date("2025-01-10T22:59:59").getTime();

    useEffect(()=>{},[]); //this is the usestate to get the what the target date should be on page load 
    useEffect(() =>{
        const countDownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
      
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
            <div className="flex flex-col">
                <div>
                    <p className="text-5xl">I'll be at <a href='https://ichibancon.com/' target='_blank' className="font-semibold underline underline-offset-4">Ichibancon 15</a></p>
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
            </div>
        </>
    );
}

export default LandingPage