"use client";
import React, { useRef, useState } from "react";

const HeroSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-100 z-50">
      <section className="max-w-7xl mx-auto p-5">
        <div className="pt-5 relative ">
          <div className="flex justify-between">
            <div className="">
              <h1 className="font-semibold text-[30px]">LUSION</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Play music"
                onClick={handlePlay}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden group bg-gray-200 cursor-pointer`}
              >
                <span className="absolute inset-0 bg-transparent transition-colors duration-500 ease-out"></span>

                {/* Play/Pause Icon */}
                {!isPlaying ? (
                  <span className="relative w-4 h-[2px] bg-black transition-colors duration-300"></span>
                ) : (
                  <div className="relative flex items-center justify-center gap-[2px]">
       
                  </div>
                )}

                {/* Wave Animation - Only show when playing */}
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center gap-[1px]">
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-1"></div>
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-2"></div>
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-3"></div>
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-4"></div>
                    <div className="w-[4px] bg-blue-600 rounded-full animate-wave-5"></div>
                  </div>
                )}
                <audio ref={audioRef} src="/future-design-344320.mp3" preload="auto" />
              </button>

              <button
                type="button"
                className="relative flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2B2B2B] text-white text-[12px] font-semibold overflow-hidden group transition-all duration-300"
              >
                {/* SVG Arrow (hidden initially, slides in) */}
                <svg
                  className="absolute left-[-20px] opacity-0 w-2.5 h-3.5 group-hover:left-4 group-hover:opacity-100 transition-all duration-300 ease-out z-10  "
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

                {/* Dot (visible initially, hides on hover) */}
                <span className="w-[4px] h-[4px] bg-white rounded-full group-hover:opacity-0 transition-opacity duration-300"></span>

                {/* Blue background overlay (appears on hover) */}
                <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in"></span>
              </button>

              <button className="relative flex items-center px-5 py-3 rounded-full bg-gray-200 text-black font-semibold overflow-hidden group text-[12px] gap-2">
                <span className=" ">MENU</span>
                <span className="flex flex-row gap-[2px] transition-transform duration-200 ease-in-out group-hover:rotate-180">
                  {" "}
                  <span className="w-[4px] h-[4px] bg-black rounded-full"></span>
                  <span className="w-[4px] h-[4px] bg-black rounded-full"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
