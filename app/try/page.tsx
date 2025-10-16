// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useInView } from "framer-motion";

// const Featured_work = () => {
//   const headerRef = useRef(null);
//   const headerInView = useInView(headerRef, { once: false });

//   const firstWord = ["F", "e", "a", "t", "u", "r", "e", "d"];
//   const secondWord = ["w", "o", "r", "k"];

//   const featuredItems = [
//     { src: "/images1.png", category: "WEB • DESIGN • DEVELOPMENT • 3D", title: "Devin AI" },
//     { src: "/images2.png", category: "CONCEPT • 3D ILLUSTRATION • MOGRAPH • VIDEO", title: "Porsche: Dream Machine" },
//     { src: "/images3.png", category: "WEB • DESIGN • DEVELOPMENT • 3D • WEB3", title: "Synthetic Human" },
//     { src: "/images4.png", category: "WEB • DESIGN • DEVELOPMENT • 3D", title: "Meta: Spatial Fusion" },
//     { src: "/images5.png", category: "WEB • DESIGN • DEVELOPMENT • 3D • WEB3", title: "Spaaace – NFT Marketplace" },
//     { src: "/images6.png", category: "WEB • DESIGN • DEVELOPMENT • 3D", title: "DDD 2024" },
//     { src: "/images7.png", category: "CONCEPT • WEB • GAME DESIGN • 3D", title: "Choo Choo World" },
//     { src: "/images8.png", category: "AR • DEVELOPMENT • 3D", title: "Soda Experience" },
//   ];

//   return (
//     <div className="bg-gray-100">
//       <section className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between px-6 py-10 pt-10 pb-12 items-end">
//           <div className="pt-1 relative" ref={headerRef}>
//             <div className=" -ml-[0.07em]  text-[8vw] tracking-[-0.02em] font-normal text-black flex gap-8">
//               {/* First word */}
//               <div className="flex">
//                 {firstWord.map((letter, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ y: 40, opacity: 0 }}
//                     animate={headerInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="inline-block"
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//               </div>

//               {/* Second word */}
//               <div className="flex">
//                 {secondWord.map((letter, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ y: 40, opacity: 0 }}
//                     animate={headerInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
//                     transition={{ duration: 0.5, delay: (firstWord.length + index) * 0.1 }}
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

//         {/* Featured Work Grid */}
//         <div className="grid grid-cols-2 px-6 pt-6 pb-10 gap-7">
//           {featuredItems.map((item, index) => {
//             const ref = useRef(null);
//             const isInView = useInView(ref, { amount: 0.2, once: false });

//             const letters = item.category.split("");

//             return (
//               <div key={index} className="space-y-4 group cursor-pointer">
//                 {/* Image animation */}
//                 <motion.div
//                   ref={ref}
//                   className="relative w-[85%] h-[380px] overflow-hidden rounded-[15px] mx-auto"
//                   animate={{
//                     width: isInView ? "100%" : "85%",
//                     opacity: isInView ? 1 : 0.8,
//                   }}
//                   transition={{ duration: 0.8, ease: "easeInOut" }}
//                 >
//                   <Image src={item.src} alt={item.title} fill className="object-cover" />
//                 </motion.div>

//                 {/* Category - Letter by letter animation */}
//                 <h1 className="text-[0.9vw] uppercase font-normal text-black flex overflow-hidden">
//                   {letters.map((letter, i) => (
//                     <motion.span
//                       key={i}
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
//                       transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
//                       className="inline-block"
//                     >
//                       {letter === " " ? "\u00A0" : letter}
//                     </motion.span>
//                   ))}
//                 </h1>

//                 {/* Title */}
//                 <h2 className="flex items-center gap-3 text-[3vw] font-normal text-black transition-all duration-300 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 overflow-hidden w-fit">
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
//                   <span className="transition-all duration-300">{item.title}</span>
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
"use client";
import Interaction1 from "../components/Interaction1";
import Interaction from "../components/Interaction";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";


const Beyond_vision = () => {
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <div className="bg-gray-100">
      <section className="max-w-7xl mx-auto" ref={ref}>
        <div className="relative">
            <LinePath
              className=" -left-1/2 -translate-x-1/2 -top-[400px]"
              scrollYProgress={scrollYProgress}
            />
          <div className=" text-black px-8 py-10 absolute top-40">
            <Interaction>
              <h1 className=" relative text-[10vw]  tracking-[-0.02em] mt-[1em]  leading-[1]  font-normal">
                Beyond Visions
              </h1>
            </Interaction>
            <Interaction1>
              <h2 className=" relative text-[10vw]  tracking-[-0.02em] mt-[0.9rem] mb-[0.5em] leading-[1] font-normal">
                Within Reach
              </h2>
            </Interaction1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 md:px-5 lg:px-0 overflow-hidden absolute">
          <div></div>
          <div>
            <Interaction1>
              <p className="">
                Lusion is a digital production studio that brings your ideas to
                life through visually captivating desighns and interactive
                experiences. with our talented team, we push the boundaries by
                solving complex problems, deliveing tailored solutions that
                exceed expactations and engage audiences.
              </p>
            </Interaction1>
          </div>
          <div>
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
          </div>
          <div className="pt-20">
            <button
              type="button"
              className="relative flex items-center justify-center  px-5 py-3  gap-[1rem] p-[1rem]  bg-[#fff] text-black text-[clamp(.875rem,1vw,1.75rem)] font-semibold overflow-hidden group  w-fit shadow-[0_6px_10px_#0000000a,0_2px_4px_#0000000a]  ease-[cubic-bezier(.35,0,0,1)] rounded-full  group transition-all duration-300"
            >
              <span className="w-[6px] h-[6px] bg-black group-hover:bg-white rounded-full  group-hover:opacity-0  transition-opacity duration-300 shadow"></span>
              <span className="relative z-10 group-hover:-translate-x-5 transition-transform duration-300 group-hover:text-white">
                ABOUT US
              </span>

              <svg
                className="absolute right-[-20px] opacity-0 w-4 h-3.5 group-hover:right-2 group-hover:opacity-100 transition-all duration-300 ease-out z-10 group-hover:text-white "
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
        </div>
      </section>
    </div>
  );
};

export default Beyond_vision;

const LinePath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  return (
    <svg
      width="1278"
      height="2000"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="#3945f3"
        strokeWidth="20"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
};


// import React from "react";
// import Interaction from "./Interaction";
// import Interaction1 from "./Interaction1";
// const Beyond_vision = () => {
//   return (
//     <div className="bg-gray-100">
//       <section className="max-w-7xl mx-auto ">
//         <div>
//           <div className=" text-black px-8 py-10 z-[9999]">
//             <Interaction>
//               <h1 className=" relative text-[10vw]  tracking-[-0.02em] mt-[1em]  leading-[1]  font-normal">
//                 Beyond Visions
//               </h1>
//             </Interaction>
//             <Interaction1>
//               <h2 className=" relative text-[10vw]  tracking-[-0.02em] mt-[0.9rem] mb-[0.5em] leading-[1] font-normal">
//                 Within Reach
//               </h2>
//               </Interaction1>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-10 md:px-5 lg:px-0 overflow-hidden">
//           <div></div>
//           <div>
//             <Interaction1>
//             <p className="">
//               Lusion is a digital production studio that brings your ideas to
//               life through visually captivating desighns and interactive
//               experiences. with our talented team, we push the boundaries by
//               solving complex problems, deliveing tailored solutions that exceed
//               expactations and engage audiences.
//             </p>
//             </Interaction1>
//           </div>
//           <div>
//             <div className="relative w-[100%] h-[350px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center ">
//               {/* Play Button */}
//               <div className="w-20 h-20  rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer group">
//                 <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1 group-hover:scale-110 transition-transform duration-300"></div>
//               </div>

//               {/* Placeholder Text */}
//               <div className="absolute bottom-8 left-8 text-white/60 text-sm">
//                 Video Placeholder
//               </div>
//             </div>
//           </div>
//           <div className="pt-20">
//             <button
//               type="button"
//               className="relative flex items-center justify-center  px-5 py-3  gap-[1rem] p-[1rem]  bg-[#fff] text-black text-[clamp(.875rem,1vw,1.75rem)] font-semibold overflow-hidden group  w-fit shadow-[0_6px_10px_#0000000a,0_2px_4px_#0000000a]  ease-[cubic-bezier(.35,0,0,1)] rounded-full  group transition-all duration-300"
//             >
//               <span className="w-[6px] h-[6px] bg-black group-hover:bg-white rounded-full  group-hover:opacity-0  transition-opacity duration-300 shadow"></span>
//               <span className="relative z-10 group-hover:-translate-x-5 transition-transform duration-300 group-hover:text-white">
//                 ABOUT US
//               </span>

//               <svg
//                 className="absolute right-[-20px] opacity-0 w-4 h-3.5 group-hover:right-2 group-hover:opacity-100 transition-all duration-300 ease-out z-10 group-hover:text-white "
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 5h12m0 0L9 1m4 4L9 9"
//                 />
//               </svg>
//               <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in"></span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Beyond_vision;
// "use client";
// import Interaction1 from "../components/Interaction1";
// import Interaction from "../components/Interaction";
// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// const Beyond_vision = () => {
//   // const ref = useRef<HTMLDivElement>(null);
//   // const { scrollYProgress } = useScroll({
//   //   target: ref,
//   // });
//     const ref = useRef<HTMLDivElement>(null);

//   // Scroll progress tracking for the section
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"], // smooth in/out scroll mapping
//   });
//   return (
//     <div className="bg-gray-100">
//       <section className="max-w-7xl mx-auto" ref={ref}>
//         <div className="relative">
//           <LinePath
//             className="-left-1/2 -translate-x-1/2 -top-[400px] -pt-20 -z-10"
//             scrollYProgress={scrollYProgress}
//           />
//           <div className=" text-black px-8 py-10 absolute top-40">
//             <Interaction>
//               <h1 className=" relative text-[10vw]  tracking-[-0.02em] mt-[1em]  leading-[1]  font-normal">
//                 Beyond Visions
//               </h1>
//             </Interaction>
//             <Interaction1>
//               <h2 className=" relative text-[10vw]  tracking-[-0.02em] mt-[0.9rem] mb-[0.5em] leading-[1] font-normal">
//                 Within Reach
//               </h2>
//             </Interaction1>
//           </div>
//           <div className="grid grid-cols-2  md:px-5 lg:px-7 overflow-hidden absolute top-[100vh] left-0 right-0 z-10 pt-12">
//             <div></div>
//             <div>
//               <Interaction1>
//                 <p className="font-normal text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.4] text-black">
//                   Lusion is a digital production studio that brings your ideas
//                   to life through visually captivating desighns and interactive
//                   experiences. with our talented team, we push the boundaries by
//                   solving complex problems, deliveing tailored solutions that
//                   exceed expactations and engage audiences.
//                 </p>
//               </Interaction1>
//             </div>
//             <div className="relative w-[90%] h-[300px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center ">
//               <div className="w-15 h-15  rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer group">
//                 <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1 group-hover:scale-110 transition-transform duration-300"></div>
//               </div>

//               <div className="absolute bottom-8 left-8 text-white/60 text-sm">
//                 Video Placeholder
//               </div>
//             </div>

//             <div className="pt-16">
//               <button
//                 type="button"
//                 className="relative flex items-center justify-center  px-5 py-3  gap-[1rem] p-[1rem]  bg-[#fff] text-black text-[clamp(.875rem,1vw,1.75rem)] font-semibold overflow-hidden group  w-fit shadow-[0_6px_10px_#0000000a,0_2px_4px_#0000000a]  ease-[cubic-bezier(.35,0,0,1)] rounded-full  group transition-all duration-300"
//               >
//                 <span className="w-[6px] h-[6px] bg-black group-hover:bg-white rounded-full  group-hover:opacity-0  transition-opacity duration-300 shadow"></span>
//                 <span className="relative z-10 group-hover:-translate-x-5 transition-transform duration-300 group-hover:text-white">
//                   ABOUT US
//                 </span>

//                 <svg
//                   className="absolute right-[-20px] opacity-0 w-4 h-3.5 group-hover:right-2 group-hover:opacity-100 transition-all duration-300 ease-out z-10 group-hover:text-white "
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//                 <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in"></span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Beyond_vision;

// const LinePath = ({
//   className,

//   scrollYProgress,
// }: {
//   className: string;
//   scrollYProgress: any;
// }) => {
//   // const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
//   // Make the animation slower but scroll-synced
//  const pathLength1 = useTransform(scrollYProgress, [0, 1], [0, 1]);
//   const pathLength2 = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
//   return (
//     <svg
//       width="1278"
//       height="1200"
//       viewBox="0 0 1278 2319"
//       fill="none"
//       overflow="visible"
//       xmlns="http://www.w3.org/2000/svg"
//       // className={className}
//             className={` ${className}`}
//     >

//       <motion.path
//         d="M -77 352 C 1086 846 1587 932 1201 1943 c -725 563 -955 -792 536 -413 C 1965 1576 2297 1999 2298 1999 C 2586 2351 2669 1453 3435 2901"
//         // d="M -77 352 C 1086 846 1587 932 1201 1943 c -725 563 -955 -792 536 -413 C 1965 1576 2297 1999 2298 1999 C 2586 2351 2669 1453 3435 2901 C 7650 6437 3602 7329 2171 6985 C 515 6712 1088 8670 2168 8148 C 2596 7863 2061 7139 2643 7257 C 3308 7376 1669 9098 3284 8647"
//         stroke="#3945f3"
//         strokeWidth="60"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         style={{
//          pathLength: pathLength1,
//           strokeDashoffset: useTransform(pathLength1, (v) => 1 - v),
//         }}
//       />
//       <motion.path
//         d="M 3435 2901 C 7650 6437 3602 7329 2171 6985 C 515 6712 1088 8670 2168 8148 C 2596 7863 2061 7139 2643 7257 C 3308 7376 1669 9098 3284 8647"        // d="M -77 352 C 1086 846 1587 932 1201 1943 c -725 563 -955 -792 536 -413 C 1965 1576 2297 1999 2298 1999 C 2586 2351 2669 1453 3435 2901 C 7650 6437 3602 7329 2171 6985 C 515 6712 1088 8670 2168 8148 C 2596 7863 2061 7139 2643 7257 C 3308 7376 1669 9098 3284 8647"
//         stroke="#3945f3"
//         strokeWidth="60"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         style={{
//         pathLength: pathLength2,
//           strokeDashoffset: useTransform(pathLength2, (v) => 1 - v),
//         }}
//       />
//     </svg>
//   );
// };
