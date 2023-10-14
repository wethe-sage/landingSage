import React, { useEffect, useState } from 'react';
import why from './Asset/why2.jpg';
import bg from './Asset/bg.jpg';
import './recentTrip.css';
import { motion } from 'framer-motion';
import {useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WhyUs = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
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
      backgroundColor: '#bcad3c',
      mixBlendMode: 'difference',
    }
  };

  const textEnter = () => {
    if (window.innerWidth > 768) {
      setCursorVariant('text');
    }
  };

  const textLeave = () => {
    if (window.innerWidth > 768) {
      setCursorVariant('default');
    }
  };
const ref =useRef(null);
  const {scrollYProgress}=useScroll({
    target: ref,
    offset:["0 1", "0.85 1"],
  })
  const scaleProgess =useTransform(scrollYProgress, [0, 1], [0.5,1]);
  const opacityProgess =useTransform(scrollYProgress, [0, 1], [0.6,1]);
  return (
    <div className="bg-gray-100 py-10 md:py-20 px-4">
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className='text-[40px] heading text-center font-bold md:text-center md:text-[55px] text-[#164154] md:font-extrabold mt-4 mb-[40px] md:mt-0  md:mb-[20px]'
      >
        Why Choose Us?
      </h1>
      {window.innerWidth > 768 && (
        <motion.div className="cursor" variants={variants} animate={cursorVariant} />
      )}

      <div className="relative mt-4">
        <img
          src={bg}
          className="w-full h-[165px] md:h-[470px] rounded-lg opacity-90 brightness-[50%] bg-blue-500"
          alt="Background"
        />
        <motion.div  ref={ref}
          style={{
              scale:scaleProgess,
              opacity:opacityProgess,
            }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-[10%] md:left-[18%] md:w-[68%] md:rounded-xl md:h-auto md:bg-[#fff] md:p-8">
          <div className="flex gap-[79px]">
            <img
              src={why}
              alt="Why Us Image"
              className="hidden lg:block md:w-[350px] md:h-[300px] md:rounded-xl"
            />
            <div className=" w-[430px] h-[100px] text-justify md:w-auto md:h-[310px] overflow-auto -mt-[50px] -ml-[140px] md:mt-0 max-w-full md:max-w-[700px]">
              <p className="text-base text-white md:text-[23px] md:mt-[] md:pl-[100px] md:pr-[20px] md:text-justify md:leading-[42px] md:text-[#164154]">
                Your gateway to transformative travel! We redefine Gen-Z journeys, offering budget-friendly, offbeat adventures for personal growth and connection. Escape academic pressures and social media comparisons with SAGE's curated experiences. Explore, learn, and grow with us. Welcome to SAGE, where every destination is a classroom and every adventure a life lesson.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
