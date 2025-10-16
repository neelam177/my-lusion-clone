"use client";

import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

const TextMotion: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const text = "Featured Work";

 const headerRef = useRef<HTMLDivElement | null>(null);

  // Animate every time it comes into view
  const headerInView = useInView(headerRef, { once: false, margin: "-50px" });

  const firstWord = ["F", "e", "a", "t", "u", "r", "e", "d"];
  const secondWord = ["w", "o", "r", "k"];

  return (
    <div ref={headerRef} className="pt-10">
      <div className="text-[8vw] font-normal flex gap-4">
        {/* First word */}
        <div className="flex">
          {firstWord.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={
                headerInView
                  ? { y: 0, opacity: 1 }
                  : { y: 50, opacity: 0 } // reset on scroll out
              }
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Second word */}
        <div className="flex">
          {secondWord.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={
                headerInView
                  ? { y: 0, opacity: 1 }
                  : { y: 50, opacity: 0 } // reset on scroll out
              }
              transition={{
                duration: 0.5,
                delay: (firstWord.length + index) * 0.1,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextMotion;
