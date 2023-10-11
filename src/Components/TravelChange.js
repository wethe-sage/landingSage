import React, { useState } from 'react';
// import how from './Asset/how.jpeg';
import change from "./Asset/change.jpg"
import bg from './Asset/bg.jpg';
const TravelChange = () => {
  const [showFullText, setShowFullText] = useState(true);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='bg-gray-100 py-10 md:py-20 px-4'>
      <h1 className='text-3xl md:text-5xl lg:text-7xl text-center mb-6 md:mb-12 font-bold'>
        How Travel Changes People?
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
              className='hidden lg:block md:mt-0 md:w-[350px] md:h-[300px] md:rounded-xl object-cover'
              src={change}
              alt='Why Us Image'
            />
          
          <div className='mt-4 w-[300px] h-[100px] md:w-auto md:h-[310px] overflow-auto md:mt-0 max-w-full md:max-w-xl '>
          <p className='text-base text-white md:text-xl lg:text-xl md:text-justify md:text-[#000000]'>
          Traveling is a wonderful hobby for millions of people across the globe. It also provides various advantages to people. Here's why traveling is important: The ability to move from one place to another is a remarkable human virtue. We have the extraordinary privilege of seeing, experiencing, and learning from our travels, making them satisfying and enriching.
          </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelChange;
