import React, { useEffect, useState } from 'react';
import why from './Asset/why2.jpg';
import bg from './Asset/bg.jpg';
import './recentTrip.css';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    // Check if the screen width is greater than a certain threshold (e.g., 768 pixels for tablets)
    if (window.innerWidth > 768) {
      const mouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', mouseMove);

      return () => {
        window.removeEventListener('mousemove', mouseMove);
      };
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => {
    setCursorVariant('text');
  };

  const textLeave = () => {
    setCursorVariant('default');
  };

  return (
    <div className="bg-gray-100 py-10 md:py-20 px-4">
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-[40px] text-center font-bold md:text-center  md:text-5xl lg:text-7xl md:font-bold mt-4 md:mt-0 mb-6 md:mb-[50px]"
      >
        Why Choose Us?
      </h1>
      {window.innerWidth > 768 && (
        <motion.div className="cursor" variants={variants} animate={cursorVariant} />
      )}

      <div className="relative mt-[100px]">
        <img
          src={bg}
          className="w-full h-[165px] md:h-[450px] opacity-90 brightness-[50%] bg-blue-500"
          alt="Background"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-[10%] md:left-1/4 md:w-[55%] md:rounded-xl md:h-auto md:bg-[#fff] md:p-8">
          <div className="flex gap-[70px]">
            <img
              className="hidden lg:block md:mt-0 md:w-[350px] md:h-[300px] md:rounded-xl"
              src={why}
              alt="Why Us Image"
            />

            <div className="mt-4 w-[300px] h-[100px] md:w-auto md:h-[310px]  overflow-auto md:mt-0 max-w-full md:max-w-xl">
              <p className="text-base text-white md:text-[19px] lg:text-[19px] md:text-justify md:leading-[30px] md:text-[#000000]">
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
