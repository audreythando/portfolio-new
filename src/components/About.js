import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#02091e] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#f9bd39]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right  text-[#9db4f7] text-4xl font-bold'>
              <p>Hi. I'm Audrey Thando, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
              An aspiring full stack software developer,with keen interests in programming and technology.
              My daily bread is CSS and my mother tongue is Javascript.Passionate about building responsive,
               user friendly and accessible products. Aiming to continuously grow and broaden my software 
               development skills.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;