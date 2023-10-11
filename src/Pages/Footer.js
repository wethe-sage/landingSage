import React from 'react';
import logo from '../Components/Asset/logo.png';
import { BiLogoGmail } from 'react-icons/bi';
import { IoIosCall } from 'react-icons/io';
import { BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleBtn = () => {
    alert('Thank you for Subscribing');
  };

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-center pl-[20px] pr-[20px] pb-[20px] md:pl-[100px] md:pr-[100px] md:pb-[100px] bg-slate-200'>
        <div className='flex flex-col gap-[15px] justify-start items-start m-[20px]'>
          <img className='h-[180px] w-full md:-ml-[40px]' src={logo} alt='Logo' />
          <a
            type='mail'
            className='flex items-center gap-[10px]'
            href='mailto:explore.sage@gmail.com'
            target='_blank'
            rel='noreferrer'>
              
            <span className='text-2xl text-red-500'>
              <BiLogoGmail />
            </span>
            explore.sage@gmail.com
          </a>
          <p className='flex gap-[10px] items-center'>
            <span className='text-2xl text-blue-500'>
              <IoIosCall />
            </span>
            +91 9384176373
          </p>

          <div className='flex gap-[10px]'>
            <ul className='flex gap-[30px]'>
              <li className='text-2xl text-pink-700'>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsInstagram />
                </a>
              </li>
              <li className='text-2xl text-red-500'>
                <a
                  href='https://www.youtube.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsYoutube />
                </a>
              </li>
              <li className='text-2xl text-blue-500'>
                <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-[10px] hidden md:block md:mt-0'>
          <h1 className=' text-2xl font-bold mb-[30px] mt-[40px]'>
            Quick Links
          </h1>

          <ul className='flex flex-col gap-[10px]'>
            {/* <li className='text-sm text-gray-500'>Home</li>
            <li className='text-sm text-gray-500'>Services</li> */}
            <Link to='/about'className='text-sm text-gray-500'>About Us </Link>
            <Link to='/contact' className='text-sm text-gray-500'>Contact</Link>
          </ul>
        </div>

        <div className='bg-white flex flex-col md:flex-row p-[20px] rounded-xl'>
        <div className='md:w-[300px]'>
            <h1 className='Title text-[30px] text-black'>
            Subscribe To Get Our Newsletter
            </h1>
            <p className='description text-[15px] font-thin text-gray-500 mt-[10px] mb-[20px]'>
            Get e-mail updates about latest updates and special offers.
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
            className='inputbox bg-white border p-2 rounded-l-md'
            />
            <button
            type='submit'
            className='btn p-2 border border-white text-white bg-blue-500 rounded-r-md mt-[10px] md:mt-0'
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
