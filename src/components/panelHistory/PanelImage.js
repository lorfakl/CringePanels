import React, { useEffect, useState } from 'react';
import ImageComingSoon from './ImageComingSoon';

function PanelImage({ image }) {
    const [hasError, setHasError] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        setHasError(false);
    }, [image]);

    useEffect(() => {
        if (!isLightboxOpen) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsLightboxOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLightboxOpen]);

    if (!image || hasError) {
        return <ImageComingSoon />;
    }

    // Construct the path for images in the public/panels folder
    // It assumes the image string is just a filename like 'making_games.png'
    // If you already specify a full path (e.g., starting with '/'), it will use that directly.
    const imagePath = image.startsWith('/') 
        ? image 
        : `${process.env.PUBLIC_URL}/panels/${image}`;

    return (
        <>
            <button
                type="button"
                className="group relative flex-shrink-0 h-40 lg:h-64 bg-base-300 rounded-t-lg overflow-hidden flex items-center justify-center w-full"
                onClick={() => setIsLightboxOpen(true)}
                aria-label="View panel image full size"
            >
                <img
                    src={imagePath}
                    alt="Panel Preview"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    onLoad={() => console.log(`Image exists: ${imagePath}`)}
                    onError={() => {
                        console.log(`Image does not exist: ${imagePath}`);
                        setHasError(true);
                    }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/55 text-white text-xs lg:text-sm py-2 px-3 text-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                    Click to view full size
                </div>
            </button>

            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 p-4 lg:p-8 flex items-center justify-center"
                    onClick={() => setIsLightboxOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Full size panel image"
                >
                    <button
                        type="button"
                        className="absolute top-4 right-4 lg:top-6 lg:right-6 btn btn-circle btn-sm lg:btn-md"
                        onClick={() => setIsLightboxOpen(false)}
                        aria-label="Close full size image"
                    >
                        ✕
                    </button>
                    <img
                        src={imagePath}
                        alt="Panel Preview Full Size"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

export default PanelImage;
