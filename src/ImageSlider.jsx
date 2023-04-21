import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((currentIndex) =>
                currentIndex === images.length - 1 ? 0 : currentIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [images]);

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="product-image-carousel">
            <div className="main-image">
                <img src={images[currentImageIndex]} alt="Product" />
            </div>
            <div className="thumbnails">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className={`thumbnail ${currentImageIndex === index ? "active" : ""
                            }`}
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;