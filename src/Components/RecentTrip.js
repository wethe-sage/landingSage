import React, { useEffect, useState } from 'react';
import '../index.css';
import './recentTrip.css';
import image1 from './Asset/1691680881747.jpg';
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
      <div className='recentTrip '>
        <div className='flex flex-col gap-[70px]'>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-[40px] md:font-extrabold heading text-center font-bold md:text-center md:text-[55px] text-[#164154] mt-4 md:mt-0 md:-mb-[80px]'>Previous Chapter</h1>
        <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        />
        <p className='titel heading text-[25px] text-[#a5a7a8]  relative text-center font-extrabold mb-[70px]'></p>
        </div>

        <div className='destination mb-[100px] ml-[50px] mr-[50px] flex items-center justify-between '>
          <div className='destiText w-[45%] mr-[30px] text-start text-[20px] '>
            <p
              className={`text-justify font-normal flex justify-center  text-[#164154] ${showFullText ? 'block' : 'max-h-[380px] overflow-auto scrollbar-thin scrollbar-thumb-gray-300  pr-[5px]'}`}
            >
              Sar Pass Trek in Manali, a name that conjured visions of lush forests, rolling hills,
              pristine rivers, and glistening snow in my mind. The idea of embarking on a 5-day
              adventure through this picturesque landscape filled me with excitement and
              anticipation. However, as I set foot on this remarkable journey, I quickly realized
              how naive I had been to underestimate the challenges that lay ahead.
              On the very first day, reality hit me like a ton of bricks. The trek was no walk in
              the park; it was a demanding test of physical and mental endurance. It dawned on
              me that preconceived notions should never cloud our judgment before
              experiencing the actuality of a situation.
              There were moments during the trek when I felt utterly defeated, tempted to
              give up and surrender to the unforgiving terrain. It was in these trying times that
              the unwavering support of my friends became my lifeline. Together, we tackled
              the strenuous journey, learning valuable life lessons along the way.
              Sar Pass taught me that when we embrace life's challenges, there will be
              numerous occasions when we contemplate throwing in the towel. However, the
              true sense of satisfaction lies in persevering through those hardships and
              emerging victorious, regardless of the adversity faced.
              As I stood at the summit of Sar Pass, gazing at the breathtaking panorama
              around me, I realized that the trek had not just been an adventure; it had been a
              transformative journey. It had taught me the value of resilience, the importance
              of camaraderie, and the beauty of pushing one's limits.
              In the end, Sar Pass Trek was not just about conquering a physical obstacle; it
              was about conquering ourselves. It was a reminder that life's most rewarding
              experiences often come when we venture beyond our comfort zones, facing
              challenges head-on, and emerging stronger, wiser, and more alive than ever. Sar
              Pass, with its trials and triumphs, will forever hold a special place in my heart as a
              testament to the power of perseverance and the wonders of the great outdoors.
            </p>
            
          </div>

          <div className='image flex relative w-1/2 justify-between -z-[99]'>
            <img alt='trip image'src={image2} className='w-[49%] h-[350px] object-cover rounded-[6px] shadow-lg hover:rotate-180' ></img>
            <img alt='trip image' src={image1}  className='w-[49%] absolute top-[17%] right-0 h-[350px] object-cover rounded-[6px] shadow-2xl'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentTrip;
