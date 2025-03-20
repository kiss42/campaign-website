import React from "react";

const FlyoutMenu = ({ setIsMenuOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center space-y-6 text-white text-2xl font-bold tracking-wider uppercase transition-all duration-300">
      {/* Close Button */}
      <button className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl" onClick={() => setIsMenuOpen(false)}>
        ✕
      </button>

      {/* Navigation Links */}
      {["About", "Key Issues", "Mission", "Education", "Contact"].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`} 
          className="hover:text-primary transition-all transform hover:scale-110 duration-300" 
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default FlyoutMenu;
