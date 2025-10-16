"use client";

import React from "react";
import { motion, Variants, Transition } from "framer-motion";

interface LetterByLetterProps {
  text: string;
  className?: string;
  once?: boolean;
}

const LetterByLetter: React.FC<LetterByLetterProps> = ({ text, className, once = false }) => {
  const letters = text.split("");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // animate letters one by one
      },
    },
  };

  const letterTransition: Transition = {
    type: "tween",
    damping: 12,
    stiffness: 100,
  };

  const child: Variants = {
    hidden: { opacity: 0, y: -40 }, //  move from top
    visible: { opacity: 1, y: 0, transition: letterTransition },
  };

  return (
    <motion.div
      className={`${className} inline-block`} // 👈 keep letters in a horizontal line
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block" // 👈 ensures vertical animation works properly
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LetterByLetter;
