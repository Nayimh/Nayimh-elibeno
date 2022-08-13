import React from 'react';
import Navbar from '../Navbar';
import { Image } from "../../../assets/Image/index";
import { useLocation } from 'react-router-dom';

function Header() {

  const { state } = useLocation();

  return (
      <div className='bg-navbg  bg-cover bg-left-top'>
      <div className="container mx-auto">
      <Navbar/>
        <div className="flex justify-between mt-[147px] pb-[163px] px-1">
          <h1 className=' font-syne font-normal md:font-bold leading-relaxed text-xl md:text-5xl lg:text-[64px] text-white  '> {state} </h1>
          <p className='flex items-center gap-2 md:font-semibold text-light-white text-base leading-relaxed font-manrope'> Home <span> <img src={Image?.angle} alt="" /> </span> <span className='text-pink'> {state} </span> </p>
        </div>
        
      </div>
      </div>
  )
}

export default Header