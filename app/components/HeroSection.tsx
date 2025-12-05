"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";


const HeroSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const tabs = ["HOME", "ABOUT US", "PROJECTS", "CONTACT"];

  const handlePlay = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  // Motion variants for menu container
  const menuVariants = {
    hidden: { y: 50, rotateX: 15, opacity: 0 },
    visible: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 20,
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
    exit: { y: 50, rotateX: 15, opacity: 0, transition: { duration: 0.5 } },
  };

  // Motion variants for menu items
  const itemVariants = {
    hidden: { x: 20, rotateZ: -5, opacity: 0 },
    visible: {
      x: 0,
      rotateZ: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 15 },
    },
    exit: { x: 20, rotateZ: -5, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-100 z-50">
      <section className="max-w-7xl mx-auto p-5">
        <div className="pt-5 relative">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-[30px]">LUSION</h1>

            <div className="flex items-center gap-4">
              {/* Play Button */}
              <button
                type="button"
                aria-label="Play music"
                onClick={handlePlay}
                className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden group bg-gray-200 cursor-pointer"
              >
                {!isPlaying ? (
                  <span className="relative w-4 h-[2px] bg-black transition-colors duration-300"></span>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center gap-[1px]">
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-1"></div>
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-2"></div>
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-3"></div>
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-4"></div>
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-5"></div>
                  </div>
                )}
                <audio
                  ref={audioRef}
                  src="/future-design-344320.mp3"
                  preload="auto"
                />
              </button>

              {/* LET'S TALK Button */}
              <button className="relative flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2B2B2B] text-white text-[12px] font-semibold overflow-hidden group transition-all duration-300">
                <svg
                  className="absolute left-[-20px] opacity-0 w-2.5 h-3.5 group-hover:left-4 group-hover:opacity-100 transition-all duration-300 ease-out z-10"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                  LET’S TALK
                </span>
                <span className="w-[4px] h-[4px] bg-white rounded-full group-hover:opacity-0 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in"></span>
              </button>

              {/* MENU Button */}
              <motion.button
                className="relative flex items-center px-5 py-3 rounded-full bg-gray-200 text-black font-semibold overflow-hidden group text-[12px] gap-2 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span>{menuOpen ? "CLOSE" : "MENU"}</span>
                <motion.span
                  animate={{ rotate: menuOpen ? 280 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-row gap-[2px]"
                >
                  <span className="w-[4px] h-[4px] bg-black rounded-full"></span>
                  <span className="w-[4px] h-[4px] bg-black rounded-full"></span>
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed uppercase w-[17.5rem] right-10 cursor-pointer space-y-3"
            key="menu"
            initial={{ y: 88, rotate: 3.5, opacity: 0 }} // 5.5em ≈ 88px, rotate in degrees
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: 88, rotate: 3.5, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 20,
              duration: 0.8,
              staggerChildren: 0.1,
            }}
          >
            {/* Tilted White Container */}
            <motion.div
              className="bg-white flex flex-col text-3xl shadow-lg  px-[0.3125em] rounded-[0.625em]"
              initial={{ y: 88, rotate: 3.5, opacity: 0 }} // 5.5em ≈ 88px, rotate in degrees
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              exit={{ y: 88, rotate: 3.5, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                duration: 0.6,
              }}
            >
              <ul className=" font-medium py-2 ">
                {tabs.map((tab) => (
                  <motion.li
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    variants={itemVariants}
                    className={`group flex justify-between items-center cursor-pointer text-black font-medium rounded-[6.25em] hover:bg-blue-50 p-[1rem] relative overflow-hidden ${
                      activeTab === tab ? "bg-white" : ""
                    }`}
                  >
                    <span>{tab}</span>

                    {/* Arrow SVG animation */}
                    {activeTab !== tab && (
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="absolute h-[1.5em] w-[1.5em] top-[calc(50%-0.75em)] right-6 text-black
                      transition-all duration-300 ease-[cubic-bezier(.4,0,.1,1)]
                      scale-0 group-hover:scale-60 group-hover:translate-x-5"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.515 12h16.97m0 0L13.01 4.525M20.485 12l-7.475 7.476"
                        />
                      </motion.svg>
                    )}

                    <AnimatePresence>
                      {activeTab === tab && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="text-black text-xl"
                        >
                        •
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Bottom labs section */}
            <motion.div
              className="bg-black rounded-[0.625em] justify-between flex px-7 py-5"
              initial={{ y: 88, rotate: 3.5, opacity: 0 }} // 5.5em ≈ 88px, rotate in degrees
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              exit={{ y: 88, rotate: 3.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-5">
                <svg
                  id="header-menu-labs-lucy-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="38"
                  fill="none"
                  viewBox="0 0 28 38"
                  className="flex"
                >
                  <path
                    stroke="#fff"
                    strokeWidth="5"
                    d="M20.128 29.65C18.584 31.217 16.532 32 13.972 32c-2.56 0-4.612-.783-6.156-2.35C6.272 28.05 5.5 26 5.5 23.5c0-2.5.772-4.533 2.316-6.1 1.544-1.6 3.596-2.4 6.156-2.4 2.56 0 4.612.8 6.156 2.4C21.71 18.967 22.5 21 22.5 23.5c0 2.5-.79 4.55-2.372 6.15Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M23.5 4.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0ZM11 4.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Z"
                  ></path>
                </svg>
                <h1 className="text-white text-3xl font-semibold">labs</h1>
              </div>
              <svg
                id="header-menu-labs-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 20 20 4m0 0v14.096M20 4H5.904"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
