import React, { useState } from 'react';
import ImageComingSoon from './ImageComingSoon';

function PanelImage({ image }) {
    const [hasError, setHasError] = useState(false);

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
        <div className="flex-shrink-0 h-40 lg:h-64 bg-base-300 rounded-t-lg overflow-hidden flex items-center justify-center">
            <img 
                src={imagePath} 
                alt="Panel Preview" 
                className="w-full h-full object-contain"
                onLoad={() => console.log(`Image exists: ${imagePath}`)}
                onError={() => {
                    console.log(`Image does not exist: ${imagePath}`);
                    setHasError(true);
                }}
            />
        </div>
    );
}

export default PanelImage;
