import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import "./ImagesBackground.css";
import cassette from "./img/cassette.jpeg";

export const ImagesBackground = () => {
  return (
    <div className="images-background-container">
      <img src={cassette} alt="cassette" className="cassette" />
    </div>
  );
};
