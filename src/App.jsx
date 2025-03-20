import React, { useState } from "react";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashPage onComplete={() => setShowSplash(false)} />
  ) : (
    <HomePage />
  );
};

export default App;
