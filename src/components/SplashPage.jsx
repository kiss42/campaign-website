import React, { useState } from "react";

const SplashPage = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Handle Click: Show #GETHEARD animation, then transition
  const handleEnter = () => {
    setShowText(true); // Show "#GETHEARD"
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onComplete(); // Load homepage
      }, 1000); // Duration of fade-out
    }, 1500); // Hold "#GETHEARD" before fading out
  };

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Show Enter Button Initially */}
      {!showText && (
        <button
          className="text-xl md:text-3xl font-bold uppercase bg-primary text-white px-8 py-4 rounded-full border-4 border-white shadow-lg hover:bg-accent hover:text-black transition-transform transform hover:scale-105"
          onClick={handleEnter}
        >
          Enter
        </button>
      )}

      {/* Show "#GETHEARD" Once Button is Clicked */}
      {showText && (
        <h1 className="text-white text-6xl md:text-8xl font-extrabold uppercase tracking-wide transition-transform duration-700 scale-150 animate-pulse">
          #GETHEARD
        </h1>
      )}
    </div>
  );
};

export default SplashPage;
