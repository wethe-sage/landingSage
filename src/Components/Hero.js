import React from 'react';
import hero from './Asset/hero1.jpg';
import RecentTrip from "./RecentTrip";
import Services from "./Services";
import WhyUs from "./WhyUs";
import TravelChange from "./TravelChange";

const Hero = () => {
  return (
    <div>
      <div className='relative'>
        <img src={hero} className='w-full h-auto' alt='Hero Image' />
        <div className='absolute top-1/4 left-[30%] md:top-[35%]  transform -translate-x-1/2 -translate-y-1/2 '>
          <h1 className='text-2xl md:leading-[90px] md:text-7xl text-[#fff] font-bold leading-tight'>
            Explore Like Never 
          <br/>
          <span className='text-[#ffff]'> Before</span> With <span className='text-[#fff]'>SAGE</span>
          </h1> 

          <div className='mt-[50px] hidden md:text-lg md:block text-[#fff]'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
            <p>
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <p>
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.    
            </p>
          </div>
        </div>
      </div>
      <Services></Services>
      <RecentTrip/>
      <WhyUs/>
      <TravelChange/>
    </div>
  );
};

export default Hero;
