import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import "./MainTitle.css";

const colors = ["transparent", "#D309E1", "#9C1AFF", "#7700FF", "green"];

export const MainTitle = () => {
  const [color, setColor] = useState(colors[0]);
  const [timeoutId, setTimeoutId] = useState(null);

  const startColorChange = () => {
    let i = 0;
    const changeColor = () => {
      setColor(colors[i]);
      i = (i + 1) % colors.length;
      setTimeoutId(setTimeout(changeColor, 40));
    };
    changeColor();
  };

  const stopColorChange = () => {
    clearTimeout(timeoutId);
    setTimeoutId(null);
    setColor(colors[0]);
  };
  return (
    <div className="main-title-section">
      <section className="cover-title-section">
        <m.h1 className="cover-title-section-title empty">
          EM
          <span
            className="empty-p"
            style={{ color }}
            onMouseEnter={startColorChange}
            onMouseLeave={stopColorChange}
          >
            P
          </span>
          TY
        </m.h1>
        <m.h1 className="cover-title-section-title space">SPACE</m.h1>
        <m.h1 className="cover-title-section-title motion">MOTION</m.h1>
      </section>
    </div>
  );
};
