import React from "react";
import "../index.css";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-lg text-white fixed w-full top-0 z-50 shadow-lg p-4 md:py-5 flex justify-between items-center">
      {/* Logo & Candidate Name */}
      <div className="flex items-center space-x-4">
        <img 
          src="/src/assets/logo.png" 
          alt="Campaign Logo" 
          className="h-40 md:h-52 w-auto object-contain"
        />
        <h1 className="text-xl md:text-3xl font-bold tracking-wide uppercase text-primary hover:text-accent transition-all duration-300">
          FOR WITCHER
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6">
        {["About", "Key Issues", "Mission", "Education", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="hover:text-primary transition-all transform hover:scale-105 duration-300 font-medium text-base md:text-lg"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
