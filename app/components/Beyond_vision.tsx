"use client";
import Interaction1 from "../components/Interaction1";
import Interaction from "../components/Interaction";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import dynamic from "next/dynamic";

const VideoPanelScene = dynamic(
  () => import("./VideoPanelScene"),
  { ssr: false }
);

const Beyond_vision = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <div className="bg-gray-100 relative">
      {/* Video Panel Scene - 3D animated video */}
      <VideoPanelScene
        videoSrc="/video.mp4"
        tintColor={{ r: 0.6, g: 0.6, b: 1.0 }}
        borderRadius={0.085}
        startElementId="video-panel-start"
        endElementId="video-panel-end"
        endParentId="video-panel-end-parent"
      />

      <section className="max-w-7xl mx-auto relative z-0" ref={ref}>
        <div className="relative">
          {/* LinePath */}
          <LinePath
            className="-left-1/2 -translate-x-1/2 -top-[400px] -pt-20 -z-10"
            scrollYProgress={scrollYProgress}
          />

          {/* Text */}
          <div className="text-black px-8 py-10 absolute top-40">
            <Interaction>
              <h1 className="relative text-[10vw] tracking-[-0.02em] mt-[1em] leading-[1] font-normal">
                Beyond Visions
              </h1>
            </Interaction>
            <Interaction1>
              <h2 className="relative text-[10vw] tracking-[-0.02em] mt-[0.9rem] mb-[0.5em] leading-[1] font-normal">
                Within Reach
              </h2>
            </Interaction1>
          </div>

          {/* Content Grid - Video LEFT, Text RIGHT */}
          <div className="grid grid-cols-2 md:px-5 lg:px-7 overflow-hidden absolute top-[100vh] left-0 right-0 z-0 pt-12 gap-8">
            {/* Row 1: Empty left, Text right */}
            <div></div>
            <div>
              <Interaction1>
                <p className="font-normal text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.4] text-black">
                  Lusion is a digital production studio that brings your ideas
                  to life through visually captivating designs and interactive
                  experiences. With our talented team, we push boundaries by
                  solving complex problems and delivering tailored solutions
                  that exceed expectations.
                </p>
              </Interaction1>
            </div>
            {/* Row 2: Video LEFT, About Us button RIGHT */}
            <div className="flex items-center justify-start">
              <div id="video-panel-start" className="w-[90%] h-[300px] rounded-2xl" />
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="relative flex items-center justify-center px-5 py-3 gap-[1rem] bg-[#fff] text-black text-[clamp(.875rem,1vw,1.75rem)] font-semibold w-fit shadow-[0_6px_10px_#0000000a,0_2px_4px_#0000000a] rounded-full group overflow-hidden transition-all duration-300"
              >
                <span className="w-[6px] h-[6px] bg-black group-hover:bg-white rounded-full group-hover:opacity-0 transition-opacity duration-300 shadow"></span>
                <span className="relative z-10 group-hover:-translate-x-5 transition-transform duration-300 group-hover:text-white">
                  ABOUT US
                </span>
                <svg
                  className="absolute right-[-20px] opacity-0 w-4 h-3.5 group-hover:right-2 group-hover:opacity-100 transition-all duration-300 ease-out z-10 group-hover:text-white"
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
                <span className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in"></span>
              </button>
            </div>
          </div>

          {/* Video Panel End Section - Full width */}
          <div className="min-h-[30vh]" />
          <div id="video-panel-end-parent" className="min-h-[70vh] flex items-center justify-center">
            <div id="video-panel-end" className="w-full h-[70vh] rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beyond_vision;

// LinePath component
const LinePath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <svg
      width="1278"
      height="1200"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3945f3" />
          <stop offset="100%" stopColor="#465df8" />
        </linearGradient>
      </defs>
      <motion.path
        d="M -77 352 C 1086 846 1587 932 1201 1943 c -725 563 -955 -792 536 -413 C 1965 1576 2297 1999 2298 1999 C 2586 2351 2669 1453 3435 2901"
        stroke="url(#gradientStroke)"
        strokeWidth="60"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
};
