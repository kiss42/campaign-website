import React, { useState } from "react";
import GetInvolvedForm from "./GetInvolvedForm";

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative text-white text-center md:text-left py-48 px-8 flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50" 
        style={{ backgroundImage: "url('/assets/cityscape.jpg')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
        {/* Campaign Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/src/assets/logo.png" 
            alt="Campaign Logo" 
            className="h-32 md:h-40 w-auto object-contain"
          />
        </div>

        {/* Title and Description */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-2xl font-extrabold uppercase text-highlight drop-shadow-lg">
            The People's Movement
          </h1>
          <p className="text-2xl md:text-2xl font-semibold text-highlight mt-6 leading-relaxed max-w-3xl">
            <strong>Real leadership. Real change.</strong> Let’s build a unified, strong, and thriving community together.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <button 
              className="hero-button text-xl md:text-2xl px-8 py-4"
              onClick={() => setShowForm(true)} // Opens the form
            >
              Get Involved
            </button>
            <button className="hero-button bg-gray-800 hover:bg-gray-600 text-xl md:text-2xl px-8 py-4">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Show Form When Button is Clicked */}
      {showForm && <GetInvolvedForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default HeroSection;
