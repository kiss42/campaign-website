import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import BackgroundImage from "./BackgroundImage"; // This handles the rotating background
import Footer from "./Footer"; // Optional footer

const HomePage = () => {
  return (
    <div>
      {/* Background Image Component (Keeps images rotating) */}
      <BackgroundImage />

      {/* Header (Navigation) */}
      <Header />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        {/* Add More Sections Here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
