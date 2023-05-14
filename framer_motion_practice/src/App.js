import React, { useEffect } from "react";
import "./App.css";
import { MainTitle } from "./components/MainTitle/MainTitle";
import { ImagesBackground } from "./components/ImagesBackground/ImagesBackground";
import { motion as m } from "framer-motion";
import { BackgroundStripes } from "./components/MainTitle/BackgroundStripes/BackgroundStripes";
import { CornerText } from "./components/CornerText/CornerText";

function App() {
  return (
    <div className="App">
      <BackgroundStripes />
      <MainTitle />
      <ImagesBackground />
      <CornerText />
    </div>
  );
}

export default App;
