import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaUserCircle,
  FaHandshake,
} from "react-icons/fa";
import { LiaHotelSolid } from "react-icons/lia";
import { MdOutlineSchool, MdOutlineDiscount } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { BiSupport, BiTrip } from "react-icons/bi";
import './recentTrip.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';


const boxVariants = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 200 },
};

const Services = ({num}) => {
  const isMobileOrTablet = window.innerWidth <= 1024;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
    }
  };
  
  const textEnter = () => {
    setCursorVariant('text');
  };

  const textLeave = () => {
    setCursorVariant('default');
  };

  return (
    <div className='bg-gray-100 py-10 md:py-20 px-4'>
      <div className='p-[45px] md:p-12'>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-[25px] text-[#164154] text-center md:text-[55px]  md:font-bold font-semibold mt-4 md:mt-0 mb-6 md:mb-[50px]'>
          What Services We Provide You?
        </h1>
        <motion.div
          className='box'
          variants={boxVariants}
          initial='hidden'
          animate='visible'
        >
        {isMobileOrTablet ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
          >
            <ServiceCard
              image={<FaUserCircle />}
              name='Pick your itinerary'
              num={num}
              description='Choose your travel from the itineraries designed out of experience by your favorite travel Influencer just for you.'
            />
            <ServiceCard
              image={<LiaHotelSolid />}
              name='Off-beaten Path'
              num={num}
              description=' Ever wondered how 200 km away from the city would be? Brace yourself to explore the uncharted with SAGE, exclusive for your offbeat travels..'
            />
            <ServiceCard
              image={<MdOutlineSchool />}
              name='Build lasting bonds'
              num={num}
              description='Away from parties? SAGE Club is just the right place for all your cheap thrills right from 1 AM drives to Sunset watching, join SAGE Club for more.'
            />
            <ServiceCard
              image={<MdOutlineDiscount />}
              name='Safety'
              num={num}
              description='Scared of Solo-Travel? Give yourself a journey that you deserve accompanied by SAGE with utmost safety and fun along the way.'
            />
            <ServiceCard
              image={<BiTrip />}
              name='Travel Scholarship'
              num={num}
              description=' Sign up for upcoming competitions and get a chance to win 100% sponsorships on your next journey.'
            />
            <ServiceCard
              image={<FaHandshake />}
              name='Festivals and Events'
              num={num}
              description='Get ready to witness exciting Indian festivals and events hosted by SAGE and embrace the seasons with the tribe you wish.'
            />
          </Carousel>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pl-[70px]'>
            <ServiceCard
              image={<FaUserCircle />}
              name='Pick your itinerary:'
              num={num}
              description='Choose your travel from the itineraries designed out of experience by your favorite travel Influencer just for you.'
            />
            <ServiceCard
              image={<LiaHotelSolid />}
              name='Off-beaten Path'
              num={num}
              description=' Ever wondered how 200 km away from the city would be? Brace yourself to explore the uncharted with SAGE, exclusive for your offbeat travels..'
            />
            <ServiceCard
              image={<MdOutlineSchool />}
              name='Build lasting bonds'
              num={num}
              description='Away from parties? SAGE Club is just the right place for all your cheap thrills right from 1 AM drives to Sunset watching, join SAGE Club for more.'
            />
            <ServiceCard
              image={<MdOutlineDiscount />}
              name='Safety'
              num={num}
              description='Scared of Solo-Travel? Give yourself a journey that you deserve accompanied by SAGE with utmost safety and fun along the way.'
            />
            <ServiceCard
              image={<BiTrip />}
              num={num}
              name='Travel Scholarship'
              description=' Sign up for upcoming competitions and get a chance to win 100% sponsorships on your next journey.'
            />
            <ServiceCard
              image={<FaHandshake />}
              num={num}
              name='Festivals and Events'
              description='Get ready to witness exciting Indian festivals and events hosted by SAGE and embrace the seasons with the tribe you wish.'
            />
          </div>
        )}
        </motion.div>
      </div>
      {window.innerWidth > 768 && (
        <motion.div
          className='cursor'
          variants={variants}
          animate={cursorVariant}
        />
      )}
    </div>
  );
};

export default Services;
