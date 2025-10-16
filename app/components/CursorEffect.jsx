"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            250px circle at ${cursorPos.x}px ${cursorPos.y}px,
            rgba(173, 216, 230, 0.35),
            transparent 80%
          )`,
          mixBlendMode: "overlay",
          filter: "blur(60px)",
        }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default CursorEffect;
