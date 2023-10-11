import React from 'react';
import why from './Asset/why2.jpg';
import bg from './Asset/bg.jpg';

const WhyUs = () => {
  return (
    <div>
      <h1 className='text-[40px] text-center font-bold md:text-center  md:text-5xl lg:text-7xl md:font-bold mt-4 md:mt-0 mb-6 md:mb-[50px]'>
        Why Choose Us?
      </h1>

      <div className='relative'>
        <img
          src={bg}
          className='w-full h-[165px] md:h-[440px] opacity-90 brightness-[50%] bg-blue-500'
          alt='Background'
        />

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-[10%] md:left-1/4 md:w-[55%] md:rounded-xl md:h-auto md:bg-[#fff] md:p-8'>
          <div className='flex gap-[70px]'>
            <img
              className='hidden lg:block md:mt-0 md:w-[350px] md:h-[300px] md:rounded-xl'
              src={why}
              alt='Why Us Image'
            />
          
          <div className='mt-4 w-[300px] h-[100px] md:w-auto md:h-[310px] overflow-auto md:mt-0 max-w-full md:max-w-xl '>
          <p className='text-base text-white md:text-xl lg:text-xl md:text-justify md:text-[#000000]'>
            Your gateway to transformative travel! We redefine Gen-Z journeys, offering budget-friendly, offbeat adventures for personal growth and connection. Escape academic pressures and social media comparisons with SAGE's curated experiences. Explore, learn, and grow with us. Welcome to SAGE, where every destination is a classroom and every adventure a life lesson.
          </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
