// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useInView } from "framer-motion";
// import LetterByLetter from './LetterByLetter';

// const Featured_work = () => {
//   const headerRef = useRef(null);
//   const headerInView = useInView(headerRef, { once: false });

//   const firstWord = ["F", "e", "a", "t", "u", "r", "e", "d"];
//   const secondWord = ["w", "o", "r", "k"];

//   const featuredItems = [
//     {
//       src: "/images1.png",
//       category: "WEB • DESIGN • DEVELOPMENT • 3D",
//       title: "Devin AI",
//     },
//     {
//       src: "/images2.png",
//       category: "CONCEPT • 3D ILLUSTRATION • MOGRAPH • VIDEO",
//       title: "Porsche: Dream Machine",
//     },
//     {
//       src: "/images3.png",
//       category: "WEB • DESIGN • DEVELOPMENT • 3D • WEB3",
//       title: "Synthetic Human",
//     },
//     {
//       src: "/images4.png",
//       category: "WEB • DESIGN • DEVELOPMENT • 3D",
//       title: "Meta: Spatial Fusion",
//     },
//     {
//       src: "/images5.png",
//       category: "WEB • DESIGN • DEVELOPMENT • 3D • WEB3",
//       title: "Spaaace – NFT Marketplace",
//     },
//     {
//       src: "/images6.png",
//       category: "WEB • DESIGN • DEVELOPMENT • 3D",
//       title: "DDD 2024",
//     },
//     {
//       src: "/images7.png",
//       category: "CONCEPT • WEB • GAME DESIGN • 3D",
//       title: "Choo Choo World",
//     },
//     {
//       src: "/images8.png",
//       category: "AR • DEVELOPMENT • 3D",
//       title: "Soda Experience",
//     },
//   ];

//   return (
//     <div className="bg-gray-100">
//       <section className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between px-6 py-10 pt-10 pb-12 items-end">
//           <div className="pt-1 relative" ref={headerRef}>
//             <div className=" -ml-[0.07em]  text-[8vw] tracking-[-0.02em] font-normal text-black flex gap-8">
//               <div className="flex">
//                 {firstWord.map((letter, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ y: 40, opacity: 0 }}
//                     animate={
//                       headerInView
//                         ? { y: 0, opacity: 1 }
//                         : { y: 40, opacity: 0 }
//                     }
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="inline-block"
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//               </div>

//               <div className="flex">
//                 {secondWord.map((letter, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ y: 40, opacity: 0 }}
//                     animate={
//                       headerInView
//                         ? { y: 0, opacity: 1 }
//                         : { y: 40, opacity: 0 }
//                     }
//                     transition={{
//                       duration: 0.5,
//                       delay: (firstWord.length + index) * 0.1,
//                     }}
//                     className="inline-block"
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="max-w-[300px]">
//             <p className="leading-[1.4] text-[0.9vw] font-[Aeonik] font-normal text-black">
//               A SELECTION OF OUR MOST PASSIONATELY CRAFTED WORKS WITH
//               FORWARD-THINKING CLIENTS AND FRIENDS OVER THE YEARS
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 px-6 pt-6 pb-10 gap-7">
//           {featuredItems.map((item, index) => {
//             const ref = useRef(null);
//             const isInView = useInView(ref, { amount: 0.2, once: false });

//             const letters = item.category.split("");

//             return (
//               <div key={index} className="space-y-4 group cursor-pointer">

//                 <motion.div
//                   ref={ref}
//                   className="relative w-[95%] h-[380px] overflow-hidden rounded-[15px] mx-auto"
//                   animate={{
//                     width: isInView ? "100%" : "95%",
//                     opacity: isInView ? 1 : 0.8,

//                   }}
//                   transition={{ duration: 0.8, ease: "easeInOut" }}
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <Image
//                     src={item.src}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </motion.div>

//                 <h1 className="text-[0.9vw] uppercase font-normal text-black flex overflow-hidden">
//                   {letters.map((letter, i) => (
//                     <motion.span
//                       key={i}
//                       // whileHover={{ scale: 2 }}
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={
//                         isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
//                       }
//                       transition={{
//                         duration: 0.4,
//                         delay: i * 0.03,
//                         ease: "easeOut",
//                       }}
//                       className="inline-block"
//                     >
//                       {letter === " " ? "\u00A0" : letter}
//                     </motion.span>
//                   ))}
//                 </h1>

//                 <h2 className="flex items-center gap-3 text-[3vw] font-normal text-black transition-all duration-300 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 overflow-hidden w-fit -mt-5 mb-10">
//                   <svg
//                     className="w-7 h-7 opacity-0 group-hover:opacity-100"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                   <LetterByLetter
//                     text={item.title}
//                     className="transition-all duration-300"
//                     once={false} // optional, can be false if you want repeat
//                   />
//                 </h2>
//               </div>
//             );
//           })}
//         </div>

//         {/* Button */}
//         <div className="flex justify-center pb-10 ">
//           <button
//             type="button"
//             className="relative cursor-pointer rounded-[5.3125em] flex items-center justify-center gap-[1rem] p-[1rem]  bg-[#fff] text-black text-[clamp(.875rem,1vw,1.75rem)] font-semibold overflow-hidden group transition-all duration-300 w-fit shadow-[0_6px_10px_#0000000a,0_2px_4px_#0000000a]  ease-[cubic-bezier(.35,0,0,1)]  will-change-transform"
//           >
//             <span className="w-[6px] h-[6px] bg-black group-hover:bg-white rounded-full group-hover:opacity-0 transition-opacity duration-300 shadow"></span>
//             <span className="uppercase relative z-10 group-hover:-translate-x-3 transition-transform duration-300 group-hover:text-white">
//               See all projects
//             </span>
//             <svg
//               className="absolute right-[-20px] opacity-0 w-4 h-4 group-hover:right-2 group-hover:opacity-100 transition-all duration-300 ease-out z-10 group-hover:text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//             <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in"></span>
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Featured_work;

// import React from "react"; // import Interaction from "./Interaction"; // import Interaction1 from "./Interaction1"; // const Beyond_vision = () => { // return ( // <div className="bg-gray-100"> // <section className="max-w-7xl mx-auto "> // <div> // <div cla

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import LetterByLetter from "./LetterByLetter";

const Featured_work = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false });

  const firstWord = ["F", "e", "a", "t", "u", "r", "e", "d"];
  const secondWord = ["w", "o", "r", "k"];

  const featuredItems = [
    {
      src: "/images1.png",
      category: "WEB • DESIGN • DEVELOPMENT • 3D",
      title: "Devin AI",
    },
    {
      src: "/images2.png",
      category: "CONCEPT • 3D ILLUSTRATION • MOGRAPH • VIDEO",
      title: "Porsche: Dream Machine",
    },
    {
      src: "/images3.png",
      category: "WEB • DESIGN • DEVELOPMENT • 3D • WEB3",
      title: "Synthetic Human",
    },
    {
      src: "/images4.png",
      category: "WEB • DESIGN • DEVELOPMENT • 3D",
      title: "Meta: Spatial Fusion",
    },
    {
      src: "/images5.png",
      category: "WEB • DESIGN • DEVELOPMENT • 3D • WEB3",
      title: "Spaaace – NFT Marketplace",
    },
    {
      src: "/images6.png",
      category: "WEB • DESIGN • DEVELOPMENT • 3D",
      title: "DDD 2024",
    },
    {
      src: "/images7.png",
      category: "CONCEPT • WEB • GAME DESIGN • 3D",
      title: "Choo Choo World",
    },
    {
      src: "/images8.png",
      category: "AR • DEVELOPMENT • 3D",
      title: "Soda Experience",
    },
  ];

  return (
    <div className="bg-gray-100">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between px-6 py-10 pt-10 pb-12 items-end">
          <div className="pt-1 relative" ref={headerRef}>
            <div className=" -ml-[0.07em]  text-[8vw] tracking-[-0.02em] font-normal text-black flex gap-8">
              <div className="flex">
                {firstWord.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={
                      headerInView
                        ? { y: 0, opacity: 1 }
                        : { y: 40, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              <div className="flex">
                {secondWord.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={
                      headerInView
                        ? { y: 0, opacity: 1 }
                        : { y: 40, opacity: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: (firstWord.length + index) * 0.1,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-[300px]">
            <p className="leading-[1.4] text-[0.9vw] font-[Aeonik] font-normal text-black">
              A SELECTION OF OUR MOST PASSIONATELY CRAFTED WORKS WITH
              FORWARD-THINKING CLIENTS AND FRIENDS OVER THE YEARS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 px-6 pt-6 pb-10 gap-7">
          {featuredItems.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { amount: 0.2, once: false });

            const letters = item.category.split("");

            return (
              <div key={index} className="space-y-4 group cursor-pointer">
                <motion.div
                  ref={ref}
                  className="relative w-[95%] h-[380px] overflow-hidden rounded-[15px] mx-auto"
                  animate={{
                    width: isInView ? "100%" : "95%",
                    opacity: isInView ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <h1 className="text-[0.9vw] uppercase font-normal text-black flex overflow-hidden">
                  {letters.map((letter, i) => (
                    <motion.span
                      key={i}
                      // whileHover={{ scale: 2 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={
                        isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: i * 0.03,
                        ease: "easeOut",
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </h1>

                <h2 className="flex items-center gap-3 text-[3vw] font-normal text-black transition-all duration-300 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 overflow-hidden w-fit -mt-5 mb-10">
                  <svg
                    className="w-7 h-7 opacity-0 group-hover:opacity-100"
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
                  <LetterByLetter
                    text={item.title}
                    className="transition-all duration-300"
                    once={false} // optional, can be false if you want repeat
                  />
                </h2>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center pb-10 relative " ref={ref}>
          <LinePath
            className="absolute -right-30 translate-x-1/2 w-[400px] h-[300px]"
            scrollYProgress={scrollYProgress}
          />
          <button
            type="button"
            className="relative cursor-pointer rounded-[5.3125em] flex items-center justify-center gap-[1rem] p-[1rem]  bg-[#fff] text-black text-[clamp(.875rem,1vw,1.75rem)] font-semibold overflow-hidden group transition-all duration-300 w-fit shadow-[0_6px_10px_#0000000a,0_2px_4px_#0000000a]  ease-[cubic-bezier(.35,0,0,1)]  will-change-transform"
          >
            <span className="w-[6px] h-[6px] bg-black group-hover:bg-white rounded-full group-hover:opacity-0 transition-opacity duration-300 shadow"></span>
            <span className="uppercase relative z-10 group-hover:-translate-x-3 transition-transform duration-300 group-hover:text-white">
              See all projects
            </span>
            <svg
              className="absolute right-[-20px] opacity-0 w-4 h-4 group-hover:right-2 group-hover:opacity-100 transition-all duration-300 ease-out z-10 group-hover:text-white"
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
            <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in"></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Featured_work;
const LinePath = ({
  className,

  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [1, 0]);
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
      <motion.path
        d="M 190 412 Q -172 636 -1362 291 C -8829 -2485 -9543 4269 -6079 4799 C -1380 4821 -4954 342 -2461 540 C -210 717 -3233 5019 -3057 4821 C -4050 6696 -1446 7005 165 6012"
        stroke="#34b6d4"
        strokeWidth="250"
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
