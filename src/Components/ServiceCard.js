import React from 'react';

const ServiceCard = (props) => {
  return (
    <div>
      <div className='hover:shadow-xl flex select-none rounded-lg  p-[30px] flex-col justify-center items-center bg-white w-[280px] h-[270px] max-h-[250px]'>
        <h1 className='text-[70px] text-blue-950 mt-[5px]'>{props.image}</h1>
        <h1 className=' font-semibold text-2xl mt-[20px]  text-blue-950'>{props.name}</h1>
        <p className='text-gray-700 text-sm p-[10px] text-justify'>{props.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
