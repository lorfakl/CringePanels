import React, {useState, useEffect } from 'react'

function PanelCarousel({ images, interval = 5000 })
{
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Function to go to the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Function to jump to a specific slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Set up auto-transition timer
    useEffect(() => {
        const timer = setInterval(() => {nextSlide() }, interval);

        // Clear timer on component unmount
        return () => clearInterval(timer);
    }, [interval]);

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
                    {image.label && (<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center">{image.label}</div>)}

                </div>
            ))}

            {/* Previous button */}
            <button className="btn btn-circle absolute left-4 top-1/2 transform -translate-y-1/2" onClick={prevSlide}>
                ❮
            </button>

            {/* Next button */}
            <button className="btn btn-circle absolute right-4 top-1/2 transform -translate-y-1/2" onClick={nextSlide}>
                ❯
            </button>

            {/* Indicator dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                <button key={index} onClick={() => goToSlide(index)}
                    className={`btn btn-xs btn-circle ${index === currentIndex ? 'btn-primary' : 'btn-outline btn-primary'}`}>
                </button>
                ))}
            </div>
        </div>
    </>
    )
}

export default PanelCarousel