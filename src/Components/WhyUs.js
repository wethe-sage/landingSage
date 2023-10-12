import React, { useEffect, useState } from 'react';
import why from './Asset/why2.jpg';
import bg from './Asset/bg.jpg';
import './recentTrip.css';
import { motion } from 'framer-motion';
import {useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
const WhyUs = () => {
  const ref =useRef(null);
  const {scrollYProgress}=useScroll({
    target: ref,
    offset:["0 1", "0.85 1"],

  })
  const scaleProgess =useTransform(scrollYProgress, [0, 1], [0.5,1]);
  const opacityProgess =useTransform(scrollYProgress, [0, 1], [0.6,1]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [headingHovered, setHeadingHovered] = useState(false);

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
    },
  }
  
  const textEnter = () => {
    setCursorVariant('text');
  };

  const textLeave = () => {
    setCursorVariant('default');
  };

  return (
    
    <div className="bg-gray-100 py-10  px-4">
      <h1
        onMouseEnter={() => {
          textEnter();
          setHeadingHovered(true);
        }}
        onMouseLeave={() => {
          textLeave();
          setHeadingHovered(false);
        }}
        className={`heading text-[#164154] text-[40px]  text-center font-bold md:text-center md:text-[55px] md:font-bold mt-4 md:mt-0 md:mb-[60px]  mb-6 ${
          headingHovered ? 'text-why-hovered' : '' 
        }`}
      >
        Why Choose SAGE?
      </h1>
      {window.innerWidth > 768 && (
        <motion.div className="cursor" variants={variants} animate={cursorVariant} />
      )}

      <div className="relative mt-[100px]">
        <img
          src={bg}
          className="w-full h-[165px] md:h-[570px] rounded-lg opacity-90 brightness-[50%] bg-blue-500"
          alt="Background"
        />

        <motion.div  ref={ref}
        style={{
              scale:scaleProgess,
              opacity:opacityProgess,
            }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-[15%] md:left-[18%] md:w-[65%] md:rounded-xl md:h-auto md:bg-[#fff] md:p-8">
          <div className="flex gap-[70px]">
            <img
              className="hidden lg:block md:mt-[10px] md:w-[350px] md:h-[300px]  md:flex items-center  md:rounded-xl"
              src={why}
              alt="Why Us Image"
            />

            <div className="mt-4 w-[300px] h-[100px] md:w-auto md:h-[320px]  overflow-auto md:mt-0 max-w-full md:max-w-xl">
              <p className="text-base text-white md:text-[24px] md:text-justify leading-[30px] md:text-[#164154]">
              If you feel overwhelmed by the demands of city life, your responsibilities, and the stresses of your job, it may be time to take a step back and prioritize your well-being. You deserve an opportunity to reconnect with your passions and gain a fresh perspective. Allow us to guide you on a journey into the heart of nature, where time slows down, and you can focus on self-care. Let go of all that is holding you back from the things you love and discover your inner wisdom. Become "The Sage" and live the life you truly deserve.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  
  );
};

export default WhyUs;
