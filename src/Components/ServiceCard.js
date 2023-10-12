import React from 'react';

const ServiceCard = (props) => {
  return (
    <div>
      <div className='hover:shadow-xl  flex select-none rounded-xl  p-[30px] flex-col justify-center items-center bg-white w-[280px] h-[270px] max-h-[250px]'>
        <h1 className='text-[70px] text-[#bcad3c] mt-[5px]'>{props.image}</h1>
        <h1 className='heading font-semibold text-2xl mt-[20px]  text-blue-950'>{props.name}</h1>
        <p className='text-[#164154] text-sm p-[10px] text-justify'>{props.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
