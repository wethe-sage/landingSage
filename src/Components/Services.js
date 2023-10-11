import React from 'react';
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

const Services = () => {
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

  return (
    <div className='bg-slate-100'>
      <div className='p-[45px] md:p-12'>
        <h1 className='text-[25px] text-center md:text-5xl lg:text-7xl md:font-bold font-semibold mt-4 md:mt-0 mb-6 md:mb-[50px]'>
          What Services We Provide You?
        </h1>

        {isMobileOrTablet ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
          >
            <ServiceCard
            image={<FaUserCircle />}
            name='Travel Guide'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

   
          <ServiceCard
            image={<LiaHotelSolid />}
            name='Hotel Bookings'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<MdOutlineSchool />}
            name='Travel Scholarships'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<MdOutlineDiscount />}
            name='A lot of Discounts'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<AiOutlineSafety />}
            name='Travel Insurance'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<BiSupport />}
            name='Support 24/7'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<BiTrip />}
            name='Corporate Trips'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<FaHandshake />}
            name='Reliable Tour'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />
          </Carousel>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <ServiceCard
            image={<FaUserCircle />}
            name='Travel Guide'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

   
          <ServiceCard
            image={<LiaHotelSolid />}
            name='Hotel Bookings'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<MdOutlineSchool />}
            name='Travel Scholarships'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<MdOutlineDiscount />}
            name='A lot of Discounts'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<AiOutlineSafety />}
            name='Travel Insurance'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<BiSupport />}
            name='Support 24/7'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<BiTrip />}
            name='Corporate Trips'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />

          <ServiceCard
            image={<FaHandshake />}
            name='Reliable Tour'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;