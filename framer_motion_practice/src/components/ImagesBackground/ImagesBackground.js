import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import "./ImagesBackground.css";
import cassette from "./img/cassette.jpeg";
import wallStripes from "./img/wall-stripes.jpeg";

export const ImagesBackground = () => {
  return (
    <div className="images-background-container">
      <m.img src={cassette} alt="cassette" className="cassette" />
      <m.img src={wallStripes} alt="wall-stripes" className="wall-stripes" />
    </div>
  );
};
