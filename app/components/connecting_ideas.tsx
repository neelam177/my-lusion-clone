"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Connecting_ideas = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" }); // triggers when in view

  return (
    <div className="bg-gray-100">
      <section className="max-w-7xl mx-auto">
        <div className="">
          <div className="text-black px-4 py-50 z-[9999] pb-[25px]">
            <motion.p
              ref={headerRef}
              initial={{ opacity: 0, x: 40 }}
              animate={
                headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
              }
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: 0.1,
              }}
              className="relative text-[8.5vw] tracking-[-0.03em] w-[11em] font-normal leading-[1]"
            >
              Connecting Ideals to <br /> Uniquely Crafted <br /> Experiences
            </motion.p>
          </div>
          <div className="grid grid-cols-2 gap-20 md:px-5 lg:px-0 overflow-hidden pt-20">
            <div className="relative w-[100%] h-[350px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center ">
              {/* Play Button */}
              <div className="w-20 h-20  rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1 group-hover:scale-110 transition-transform duration-300"></div>
              </div>

              {/* Placeholder Text */}
              <div className="absolute bottom-8 left-8 text-white/60 text-sm">
                Video Placeholder
              </div>
            </div>
            <div className="px-10 py-10 z-9999">
              <p className="font-normal text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.4] text-black">
                At Lusion, we don't follow trends sake of it. We believe in a
                different approach - one that's centered around you, your
                audience, and the art of creating a memorable, personalized
                experience.
              </p>
              <p className="font-normal text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.4] text-black">
                Our commitment goes beyond fleeting trends; it's about crafting
                tailor-made digital journeys that resonate uniquely and leave a
                lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connecting_ideas;
