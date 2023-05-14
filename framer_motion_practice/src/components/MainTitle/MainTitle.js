import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import "./MainTitle.css";

export const MainTitle = () => {
  return (
    <div className="main-title-section">
      <section className="cover-title-section">
        <m.h1 className="cover-title-section-title empty">EMPTY</m.h1>
        <m.h1 className="cover-title-section-title space">SPACE</m.h1>
        <m.h1 className="cover-title-section-title motion">MOTION</m.h1>
      </section>
    </div>
  );
};
