import React, { useEffect, useState } from 'react';
import '../index.css';
import './recentTrip.css';
import image1 from './Asset/1691680881747.jpeg';
import image2 from './Asset/Sakleshpur.jpg';
import { motion } from 'framer-motion';

const RecentTrip = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    } 
  },[]);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    }, 
    text: {
      height:120,
      width:120,
      x: mousePosition.x-16,
      y: mousePosition.y-16,
      backgroundColor: 'black', 
      mixBlendMode: 'difference',
    },
  }
  
  const textEnter = () => {
    setCursorVariant('text');

  }
  const textLeave = () => {
    setCursorVariant('default');
  }
  return (
    <>
      <div className='recentTrip'>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-[45px] hover:text-white  md:text-5xl lg:text-7xl md:mb-4 relative text-center font-extrabold'>Our Recent Trip</h1>
        <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        />
        <p className='titel text-[30px] text-gray-500 relative text-center font-extrabold mb-[70px]'>
          Adventures fill your soul with stories
        </p>
        

        <div className='destination mb-[100px] ml-[50px] mr-[50px] flex items-center justify-between '>
          <div className='destiText w-[45%] text-start text-[20px] '>
            <h1 className='text-4xl font-bold text-black mb-[30px] pb-[10px] '>Sakleshpura, Karnataka</h1>
            <p
              className={`text-justify font-light ${showFullText ? 'block' : 'max-h-[380px] overflow-auto'}`}
            >
              The story recounts a spontaneous journey to Sakleshpura in the Western Ghats, driven by a curiosity to
              explore. Hindered by weak BSNL 5G, the traveler seeks interactions with locals for waterfall directions.
              Accidentally diverted by navigation, they encounter a pricey resort but opt to continue their search.
              Amid heavy rain, they find shelter with an elderly man who shares stories and chai. Reflecting on missed
              classroom learning, they inquire about payment but receive the man's warm invitation to return, along with
              a farm-fresh pineapple. As they drive back through the village, they notice carefree children and contrast
              their experiences with the upscale resort, appreciating the sincerity of the invitation to revisit.
            </p>
            <button
              className={`text-blue-500 hover:underline mt-2 md:hidden ${showFullText ? 'block' : 'hidden'}`}
              onClick={toggleText}
            >
              Read Less
            </button>
            <button
              className={`text-blue-500 hover:underline mt-2 md:hidden ${showFullText ? 'hidden' : 'block'}`}
              onClick={toggleText}
            >
              Read More
            </button>
          </div>

          <div className='image flex relative w-1/2 justify-between -z-[99]'>
            <img alt='trip image' src={image1} className='w-[49%] h-[350px] object-cover rounded-[6px] shadow-lg hover:rotate-180' ></img>
            <img alt='trip image' src={image2} className='w-[49%] absolute top-[17%] right-0 h-[350px] object-cover rounded-[6px] shadow-2xl'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentTrip;
