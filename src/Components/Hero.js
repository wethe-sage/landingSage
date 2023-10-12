import React from 'react';
import hero from './Asset/hero5.jpg';
import RecentTrip from "./RecentTrip";
import Services from "./Services";
import WhyUs from "./WhyUs";
import TravelChange from "./TravelChange";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const boxVariants = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 200 },
};

const Hero = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  
  const animationControl = useAnimation();

  useEffect(() => {
    
    if (inView) {
      animationControl.start('visible');
    } else {
      animationControl.start('hidden');
    }
  }, [inView, animationControl]);

  
  return (
    <div>
      <motion.div
        className='box'
        variants={boxVariants}
        initial='hidden'
        animate={control}
        ref={ref} 
      >
        <div className='relative'>
          <img src={hero} className='w-full h-auto' alt='Hero Image' />
          <div className='absolute top-1/4 left-[28%] md:top-[40%] transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-2xl md:leading-[90px] md:text-7xl text-[#fff] font-bold leading-tight'>
              Ohai Sanchari!
              <br />
            </h1>

            <div className='mt-[50px] hidden md:leading-[40px] md:text-[25px] md:block text-[#fff]'>
              <p className='text-justify tracking-wider'>
                I am SAGE, an author of your offbeat journeys.
              </p>
              <p>As I narrate your fictional bucket list into reality let’s go on more</p>
              <p>adventures, be around good people, learn new things and grow.</p>
              <p></p>
            </div>
          </div>
        </div>
        </motion.div>
        <Services />
        <RecentTrip />
        <WhyUs />
        <TravelChange />
      
    </div>
  );
};

export default Hero;
