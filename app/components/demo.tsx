// import React from 'react'
// import Image from "next/image"
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const Featured_work = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { margin: "-50px" });
//   return (
//     <div className='bg-gray-100'>
//       <section className='max-w-7xl mx-auto'>
//         <div className='flex justify-between px-6 py-10 pt-10 pb-12 items-end'>
//           <div className='pt-2 relative'>
//             <h1 className=" mx-0 -ml-[0.07em] leading-[0.9] overflow-hidden text-[8vw] tracking-[-0.02em]  font-normal text-black ">Featured work</h1>

//           </div>
//           <div className='max-w-[300px] '>
//             <p className=" leading-[1.4] text-[0.9vw]  font-[Aeonik] font-normal text-black">A SELECTION OFOUR MOSTPASSIONATELY CRAFTEDWORKSWITH FORWORD-THINKING CLIENTS AND FRIENDS OVER THE YEARS</p>
//           </div>
//         </div>
//         <div className='grid grid-cols-2 px-6 pt-6 pb-10 gap-7 '>
//           <div className="space-y-4 group cursor-pointer">
            // <motion.div
            //   ref={ref}
            //   className="relative w-[80%] h-[380px] cursor-pointer overflow-hidden rounded-[15px] mx-auto"
            //   animate={{
            //     width: isInView ? "100%" : "85%",
            //     opacity: isInView ? 1 : 0.5,
            //   }}
            //   transition={{ duration: 0., ease: "easeInOut" }}
            // >
//               <Image
//                 src="/images1.png"
//                 alt="Featured Work Image"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//             <div className='pb-10 cursor-pointer'>
//               <h1 className='text-[0.9vw]   uppercase font-normal text-black '>WEB • DESIGN • DEVELOPMENT • 3D</h1>
//               <h2 className=" flex items-center gap-3 text-[3vw] font-normal text-black transition-all duration-300 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 overflow-hidden w-fit">
//                 {/* SVG icon (hidden by default) */}
//                 <svg
//                   className="w-7 h-7 opacity-0 group-hover:opacity-100"
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

//                 {/* Text moves slightly left when icon appears */}
//                 <span className="transition-all duration-300">
//                   Devin AI
//                 </span>
//               </h2>

//             </div>
//           </div>

//           <div className="space-y-4 cursor-pointer group">
//             <motion.div
//               ref={ref}
//               className="relative w-[80%] h-[380px] cursor-pointer overflow-hidden rounded-[15px] mx-auto"
//               animate={{
//                 width: isInView ? "100%" : "85%",
//                 opacity: isInView ? 1 : 0.5,
//               }}
//               transition={{ duration: 0., ease: "easeInOut" }}
//             >              <Image
//                 src="/images2.png"
//                 alt="Featured Work Image"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//             <div className='cursor-pointer pb-10'>
//               <h1 className='text-[0.9vw]  uppercase font-normal text-black'>CONCEPT • 3D ILLUSTRATION • MOGRAPH • VIDEO</h1>
//               <h2 className='flex items-center gap-6 text-[3vw] font-normal text-black'>
//                 <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                 </svg>
//                 <span>Porsche: Dream Machine</span>
//               </h2>
//             </div>
//           </div>

//           <div className="space-y-4 group">
//             <motion.div
//               ref={ref}
//               className="relative w-[80%] h-[380px] cursor-pointer overflow-hidden rounded-[15px] mx-auto"
//               animate={{
//                 width: isInView ? "100%" : "85%",
//                 opacity: isInView ? 1 : 0.5,
//               }}
//               transition={{ duration: 0., ease: "easeInOut" }}
//             >               <Image
//                 src="/images3.png"
//                 alt="Featured Work Image"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//             <div className=' cursor-pointer pb-10'>
//               <h1 className='text-[0.9vw]  uppercase  font-normal text-black'>WEB • DESIGN • DEVELOPMENT • 3D • WEB3</h1>
//               <h2 className='flex items-center gap-6 text-[3vw] font-normal text-black'>
//                 <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                 </svg>

//                 <span>sysnthetic human </span>
//               </h2>
//             </div>
//           </div>

//           <div className="space-y-4 group">
//             <motion.div
//               ref={ref}
//               className="relative w-[80%] h-[380px] cursor-pointer overflow-hidden rounded-[15px] mx-auto"
//               animate={{
//                 width: isInView ? "100%" : "85%",
//                 opacity: isInView ? 1 : 0.5,
//               }}
//               transition={{ duration: 0., ease: "easeInOut" }}
//             >               <Image
//                 src="/images4.png"
//                 alt="Featured Work Image"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
            // <div className='cursor-pointer pb-10'>
            //   <h1 className='text-[0.9vw] uppercase  font-normal text-black'>WEB • DESIGN • DEVELOPMENT • 3D</h1>
            //   <h2 className='flex items-center gap-6 text-[3vw] font-normal text-black'>
            //     <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            //       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            //     </svg>
            //     <span>meta: spatial fusion</span>
            //   </h2>
            // </div>
//           </div>

//           <div className="space-y-4 group">
//             <motion.div
//               ref={ref}
//               className="relative w-[80%] h-[380px] cursor-pointer overflow-hidden rounded-[15px] mx-auto"
//               animate={{
//                 width: isInView ? "100%" : "85%",
//                 opacity: isInView ? 1 : 0.5,
//               }}
//               transition={{ duration: 0., ease: "easeInOut" }}
//             >                <Image
//                 src="/images5.png"
//                 alt="Featured Work Image"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//             <div className='cursor-pointer pb-10'>
//               <h1 className='text-[0.9vw]  uppercase  font-normal text-black'>WEB • DESIGN • DEVELOPMENT • 3D • WEB3</h1>
//               <h2 className='flex items-center gap-6 text-[3vw] font-normal text-black'>
//                 <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                 </svg>
//                 <span>Spaaace – NFT Marketplace</span>
//               </h2>
//             </div>
//           </div>

//           <div className="space-y-4 group">
//             <motion.div
//               ref={ref}
//               className="relative w-[80%] h-[380px] cursor-pointer overflow-hidden rounded-[15px] mx-auto"
//               animate={{
//                 width: isInView ? "100%" : "85%",
//                 opacity: isInView ? 1 : 0.5,
//               }}
//               transition={{ duration: 0., ease: "easeInOut" }}
//             >                <Image
//                 src="/images6.png"
//                 alt="Featured Work Image"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//             <div className='cursor-pointer pb-10'>
//               <h1 className='text-[0.9vw] uppercase  font-normal text-black'>WEB • DESIGN • DEVELOPMENT • 3D</h1>
//               <h2 className='flex items-center gap-6 text-[3vw] font-normal text-black'>
//                 <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                 </svg>
//                 <span>DDD 2024</span>
//               </h2>
//             </div>
//           </div>
//           <div className="space-y-4 group">
//             <motion.div
//               ref={ref}
//               className="relative w-[80%] h-[380px] cursor-pointer overflow-hidden rounded-[15px] mx-auto"
//               animate={{
//                 width: isInView ? "100%" : "85%",
//                 opacity: isInView ? 1 : 0.5,
//               }}
//               transition={{ duration: 0., ease: "easeInOut" }}
//             >               <Image
//                 src="/images7.png"
//                 alt="Featured Work Image"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//             <div className='cursor-pointer pb-10'>
//               <h1 className='text-[0.9vw]  uppercasefont-normal text-black'>CONCEPT • WEB • GAME DESIGN • 3D</h1>
//               <h2 className='flex items-center gap-6 text-[3vw] font-normal text-black'>
//                 <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                 </svg>
//                 <span>Choo Choo World</span>
//               </h2>
//             </div>
//           </div>

//           <div className="space-y-4 group">
//             <motion.div
//               ref={ref}
//               className="relative w-[80%] h-[380px] cursor-pointer overflow-hidden rounded-[15px] mx-auto"
//               animate={{
//                 width: isInView ? "100%" : "85%",
//                 opacity: isInView ? 1 : 0.5,
//               }}
//               transition={{ duration: 0., ease: "easeInOut" }}
//             >               <Image
//                 src="/images8.png"
//                 alt="Featured Work Image"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//             <div className='cursor-pointer pb-10'>
//               <h1 className='text-[0.9vw]  uppercase  font-normal text-black'>AR • DEVELOPMENT • 3D</h1>
//               <h2 className='flex items-center gap-6 text-[3vw] font-normal text-black'>
//                 <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                 </svg>
//                 <span>Soda Experience</span>
//               </h2>
//             </div>
//           </div>

//         </div>
//         <div className='flex justify-center'>

//           <button
//             type="button"
//             className="relative flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-black text-[12px] font-semibold overflow-hidden group transition-all duration-300"
//           >
//             <span className="w-[6px] h-[6px] bg-black group-hover:bg-white rounded-full  group-hover:opacity-0  transition-opacity duration-300 shadow"></span>
//             <span className="uppercase relative z-10 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-white">
//               See all projects
//             </span>

//             <svg
//               className="absolute right-[-20px] opacity-0 w-2.5 h-3.5 group-hover:right-2 group-hover:opacity-100 transition-all duration-300 ease-out z-10 group-hover:text-white "
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
//   )
// }

// export default Featured_work


"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const featuredWorks = [
  {
    src: "/images1.png",
    title: "Devin AI",
    categories: "WEB • DESIGN • DEVELOPMENT • 3D",
  },
  {
    src: "/images2.png",
    title: "Porsche: Dream Machine",
    categories: "CONCEPT • 3D ILLUSTRATION • MOGRAPH • VIDEO",
  },
  {
    src: "/images3.png",
    title: "sysnthetic human",
    categories: "WEB • DESIGN • DEVELOPMENT • 3D • WEB3",
  },
  {
    src: "/images4.png",
    title: "meta: spatial fusion",
    categories: "WEB • DESIGN • DEVELOPMENT • 3D",
  },
  {
    src: "/images5.png",
    title: "Spaaace – NFT Marketplace",
    categories: "WEB • DESIGN • DEVELOPMENT • 3D • WEB3",
  },
  {
    src: "/images6.png",
    title: "DDD 2024",
    categories: "WEB • DESIGN • DEVELOPMENT • 3D",
  },
  {
    src: "/images7.png",
    title: "Choo Choo World",
    categories: "CONCEPT • WEB • GAME DESIGN • 3D",
  },
  {
    src: "/images8.png",
    title: "Soda Experience",
    categories: "AR • DEVELOPMENT • 3D",
  },
];

const Featured_work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  return (
    <div className="bg-gray-100">
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between px-6 py-10 pt-10 pb-12 items-end">
          <div className="pt-2 relative">
            <h1 className=" mx-0 -ml-[0.07em] leading-[0.9] overflow-hidden text-[8vw] tracking-[-0.02em] font-normal text-black">
              Featured work
            </h1>
          </div>
          <div className="max-w-[300px]">
            <p className="leading-[1.4] text-[0.9vw] font-[Aeonik] font-normal text-black">
              A SELECTION OF OUR MOST PASSIONATELY CRAFTED WORKS WITH FORWARD-THINKING CLIENTS AND FRIENDS OVER THE YEARS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 px-6 pt-6 pb-10 gap-7">
          {featuredWorks.map((work, index) => (
            <div key={index} className="space-y-4 group">
              <motion.div
                ref={ref}
                className="relative w-[80%] h-[380px] cursor-pointer overflow-hidden rounded-[15px] mx-auto"
                animate={{
                  width: isInView ? "100%" : "85%",
                  opacity: isInView ? 1 : 0.5,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image src={work.src} alt={work.title} fill className="object-cover" />
              </motion.div>

              <div className="pb-10 cursor-pointer">
                <h1 className="text-[0.9vw] uppercase font-normal text-black">
                  {work.categories}
                </h1>
                <h2 className="flex items-center gap-3 text-[3vw] font-normal text-black transition-all duration-300 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 overflow-hidden w-fit">
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
                  <span className="transition-all duration-300">{work.title}</span>
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="relative flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-black text-[12px] font-semibold overflow-hidden group transition-all duration-300">
            <span className="w-[6px] h-[6px] bg-black group-hover:bg-white rounded-full group-hover:opacity-0 transition-opacity duration-300 shadow"></span>
            <span className="uppercase relative z-10 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-white">
              See all projects
            </span>

            <svg
              className="absolute right-[-20px] opacity-0 w-2.5 h-3.5 group-hover:right-2 group-hover:opacity-100 transition-all duration-300 ease-out z-10 group-hover:text-white"
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
