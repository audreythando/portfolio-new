import React from 'react';
import Gif from '../assets/user7.gif'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#02091e]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-grey-600 text-[#fdfdff] sm:text-left mt-5 '>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#9db4f7] sm:text-left  '>
          Audrey Mpalume
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#9db4f7]'>
          I'm a Software Developer.
         </h2> 
         <img className='w-80 mx-auto mt-20' src={Gif} alt="gif" />
        {/* <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button> */} 
        </div>
      </div>
    
  );
};

export default Home;