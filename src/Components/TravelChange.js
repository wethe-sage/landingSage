import React, { useState, useEffect } from 'react';
import change from "./Asset/change.jpg"
import bg from './Asset/bg.jpg';
import './recentTrip.css';
import { motion } from 'framer-motion';
import {useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TravelChange = () => {
  const [showFullText, setShowFullText] = useState(true);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const isMobileOrTablet = window.innerWidth <= 1024;

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
    <div className='bg-gray-100 py-10 px-4'>
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}   className='text-[30px] heading text-center font-bold md:text-center md:font-extrabold md:text-[55px] text-[#164154] md:mt-0 md:-mb-[80px]'>
        How Travel Changes People?
      </h1>
      {window.innerWidth > 768 && (
        <motion.div
          className='cursor'
          variants={variants}
          animate={cursorVariant}
        />
      )}
      <div className='relative mt-[100px]'>
        <img
          src={bg}
          className='w-full h-[165px] md:h-[485px] rounded-lg opacity-90 brightness-[50%] bg-blue-500'
          alt='Background'
        />

        <motion.div  ref={ref}
          style={{
              scale:scaleProgess,
              opacity:opacityProgess,
            }}  className="absolute top-1/2 left-[8%] transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-[10%] md:left-[18%] md:w-[68%] md:rounded-xl md:h-auto md:bg-[#fff] md:p-8">
           <div className='flex gap-[79px]'>
            <img
              className='hidden lg:block md:mt-0 md:w-[350px] md:h-[330px] md:rounded-xl object-cover'
              src={change}
              alt='Why Us Image'
            />
          
          <div className=" w-[300px] h-[100px] text-justify md:w-auto md:scrollbar-thin md:scrollbar-thumb-gray-300  md:h-[310px] overflow-auto -mt-[50px] md:mt-0 max-w-full md:max-w-[700px]">
          <p className="text-base text-white md:text-[23px] md:mt-[] md:pl-[20px] md:pr-[20px] md:text-justify md:leading-[35px] md:text-[#164154]">
          Travel has the power to transform people in profound and meaningful ways. It exposes us to new cultures, challenges us, and helps us grow. Through travel, we gain a deeper appreciation for the diversity that exists around us and learn to be more open-minded and adaptable. We discover passions and interests we never knew we had and find a sense of purpose and direction in life. Travel changes us, and it's a journey that can never be forgotten.
          </p>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TravelChange;
