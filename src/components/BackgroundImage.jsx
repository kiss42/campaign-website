import React, { useState, useEffect } from "react";
import "../index.css";

// Import all images dynamically from the slideshow folder
const images = Object.values(import.meta.glob("/src/assets/slideshow/*.{jpg,jpeg,png,gif}", { eager: true })).map((img) => img.default);

const BackgroundImage = ({ overlayColor = "rgba(0, 0, 0, 0.7)", interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="background-slideshow">
      {images.length > 0 && (
        <img src={images[currentIndex]} alt="Background Slideshow" className="background-image" />
      )}

      {/* Optional Overlay for Readability */}
      {overlayColor && (
        <div className="background-overlay" style={{ backgroundColor: overlayColor }}></div>
      )}
    </div>
  );
};

export default BackgroundImage;
    