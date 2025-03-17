import React, {useState, useEffect, useRef } from 'react'

function PanelCarousel({ images, interval = 5000 })
{
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0); // Added progress state
    const intervalRef = useRef(null); // Added refs for timers
    const progressIntervalRef = useRef(null);

    // Set up auto-transition timer
    useEffect(() => {
        resetTimers();
        
        // Clean up timers on component unmount
        return () => {
          if (intervalRef.current) clearInterval(intervalRef.current);
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [interval, currentIndex]);

    // Function to go to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
        setProgress(0)
    }

    // Function to go to the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
        setProgress(0)
    }

    // Function to jump to a specific slide
    const goToSlide = (index) => {
        setCurrentIndex(index)
        setProgress(0)
    }

    function resetTimers()
    {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        
        // Set up the main timer for slide transition
        intervalRef.current = setInterval(() => {
          nextSlide();
        }, interval);
        
        // Set up progress update timer
        const progressInterval = 16; // ~60fps
        const progressStep = (progressInterval / interval) * 100;
        progressIntervalRef.current = setInterval(() => {
          setProgress(prevProgress => {
            const newProgress = prevProgress + progressStep;
            return newProgress > 100 ? 100 : newProgress;
          });
        }, progressInterval);
    }

    return(
    <>
        <div className="carousel w-full h-64 md:h-80 lg:h-96 rounded-box relative overflow-hidden">
            {/* Carousel slides */}

            {images.map((image, index) => (
                <div key={index}
                className={`carousel-item absolute w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <img
                        src={image.src}
                        alt={image.label || `Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Previous button */}
            <button className="btn btn-circle absolute left-4 top-1/2 transform" onClick={prevSlide}>
                ❮
            </button>

            {/* Next button */}
            <button className="btn btn-circle absolute right-4 top-1/2 transform" onClick={nextSlide}>
                ❯
            </button>

            <div className="flex flex-col gap-2 absolute bottom-4 left-0 right-0 justify-center bg-black bg-opacity-50 rounded-lg">
                <div className="text-white p-3 text-center">{images[currentIndex].label}</div>
                <div className='flex flex-row place-self-center'>
                    {images.map((_, index) => (
                        <button key={index} onClick={() => goToSlide(index)} 
                                className={` btn btn-xs btn-circle ${index === currentIndex ? 'btn-primary' : 'btn-outline btn-primary'}`}>
                        </button>
                    ))}
                </div>
                <div className='place-self-center'>
                    {/*console.log("progress value: ", progress)*/}
                    <progress className="progress w-56" value={progress} max={100}></progress>
                </div>
            </div>
        </div>
    </>
    )
}

export default PanelCarousel