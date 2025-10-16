import React from 'react'
import Interaction1 from './Interaction1'

const Banner = () => {
  return (
    <div className='bg-gray-100 h-screen'>
      <section className='max-w-7xl mx-auto px-5 py-8'>
        <div className=' absolute  text-black max-w-[500px] mx-auto top-10  left-1/2 -translate-x-1/2 z-9999 '>
        <Interaction1>
          <h1 className='text-[30px] font-normal tracking-[0.02rem]'>We help brands create digital experiences that connect with <br /> their audience</h1>
          </Interaction1>
        </div>

          {/* Simple Video Placeholder */}
          <div className='pt-23  px-5'>
            <div className='relative w-full h-[380px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center'>
 
              {/* Play Button */}
              <div className='w-20 h-20  rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer group'>
                <div className='w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1 group-hover:scale-110 transition-transform duration-300'></div>
              </div>
 
              {/* Placeholder Text */}
              <div className='absolute bottom-8 left-8 text-white/60 text-sm'>
                Video Placeholder
              </div>
 
            </div>
          </div>

          {/* SCROLL TO EXPLORE Section */}
          <div className='px-5 py-4'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
              
              <div className='text-2xl text-black font-light'>+</div>
              <div className='text-2xl text-black font-light'>+</div>
              <div className='text-black font-semibold text-sm tracking-wider'>SCROLL TO EXPLORE</div>
              <div className='text-2xl text-black font-light'>+</div>
              <div className='text-2xl text-black font-light'>+</div>
            </div>
          </div>

      </section>
    </div>
  )
}

export default Banner