import React, { useEffect } from "react";
import "./App.css";
import { MainTitle } from "./components/MainTitle/MainTitle";
import { ImagesBackground } from "./components/ImagesBackground/ImagesBackground";
import { motion as m } from "framer-motion";

function App() {
  return (
    <div className="App">
      <MainTitle />
      <ImagesBackground />
    </div>
  );
}

export default App;
