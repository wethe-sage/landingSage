import React from 'react';
import logo from '../Components/Asset/logo.png';
import { IoIosCall } from 'react-icons/io';
import { BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import icong from '../Components/Asset/icons.png';
const Footer = () => {
  const handleBtn = () => {
    alert('Thank you for Subscribing');
  };

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-center pl-[20px] pr-[20px] pb-[20px] md:pl-[50px] md:pr-[50px] md:pb-[100px] bg-[#164154]'>
        <div className='flex flex-col gap-[20px] justify-start items-start mt-[20px]'>
         <Link to={"/"}><img className='h-[90px] w-full md:-ml-[10px]' src={logo} alt='Logo' /></Link> 
         <div className='flex flex-col gap-[20px] mt-[50px]'>
          <a
            type='mail'
            className='flex items-center text-lg text-white gap-[10px]'
            href='mailto:explore.sage@gmail.com'
            target='_blank'
            rel='noreferrer'>
              
            <span className='text-2xl text-red-500'>
              <img className='h-[30px] md:hidden lg:block' src={icong}></img>
            </span>
            info@wethesage.com
          </a>
          <a className='flex gap-[10px] text-white text-lg items-center'  href='tel:+917989909734'>
            <span className='text-2xl text-blue-500'>
              <IoIosCall />
            </span>
            +91 7989909734
          </a>
          </div>
          <div className='flex gap-[10px]'>
            <ul className='flex gap-[30px]'>
              <li className='text-2xl text-pink-700'>
                <a
                  href='https://www.instagram.com/we.the_sage/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsInstagram />
                </a>
              </li>
              <li className='text-2xl text-green-500'>
                <a
                  href='https://api.whatsapp.com/send/?phone=%2B917989909734&text&type=phone_number&app_absent=0'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsWhatsapp />
                </a>
              </li>
              <li className='text-2xl text-blue-500'>
                <a
                  href='https://www.linkedin.com/company/wethesage/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-[10px] md:ml-[40px] md:m-[5px] hidden md:block md:mt-0'>
          <h1 className=' text-4xl text-[#bcad3c] font-bold mb-[30px] mt-[40px]'>
            Quick Links
          </h1>

          <ul className='flex flex-col gap-[10px]'>
            {/* <li className='text-sm text-gray-500'>Home</li>
            <li className='text-sm text-gray-500'>Services</li> */}
            <Link to='/about'className='text-lg text-white'>About Us </Link>
            <Link to='/contact' className='text-lg text-white'>Contact</Link>
          </ul>
        </div>

        <div className='bg-white flex flex-col md:flex-col lg:flex-row p-[20px] mt-[100px] rounded-xl'>
        <div className='md:w-[300px] '>
            <h1 className='Title text-[30px] font-bold text-[#164154]'>
            Join Our Newsletter
            </h1>
            <p className='description text-[15px] font-normal text-gray-500 mt-[10px] mb-[20px]'>
            For our upcoming trips, blogs on transformative travel, exciting discounts and more.
            </p>
        </div>
        
        <form
            method='POST'
            action='https://getform.io/f/01bb9c33-6bd0-4585-be4d-efc169d667be'
            className='md:flex md:items-center'
        >
            <input
            type='email'
            name='newsLetter'
            placeholder='Enter your email address'
            className='inputbox text-[#164154] w-[200px] md:w-full bg-white border p-2 rounded-l-md'
            />
            <button
            type='submit'
            className='btn p-2 border border-white text-white bg-[#bcad3c] rounded-r-md mt-[10px] md:mt-0'
            onClick={handleBtn}
            >
            Subscribe
            </button>
        </form>
        </div>

      </div>
    </div>
  );
};

export default Footer;
