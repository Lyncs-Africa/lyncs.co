import React, { useState, useEffect, useMemo } from "react";

const ImageSwitcher = () => {
    const images = useMemo(
        () => [
            "/images/mockup/eat-1.png",
            "/images/mockup/eat-2.png",
            "/images/mockup/eat-3.png",
            "/images/mockup/eat-4.png",
            "/images/mockup/eat-5.png",
        ],
        []
    );

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div className="image-switcher-container">
            <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="fade-in-out md:h-full md:w-full h-[500px]"
            />
        </div>
    );
};

export default ImageSwitcher;