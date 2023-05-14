import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import "./BackgroundStripes.css";

export const BackgroundStripes = () => {
  return (
    <div className="background-stripes-container">
      <span className="background-stripe"></span>
      <span className="background-stripe"></span>
      <span className="background-stripe"></span>
    </div>
  );
};
