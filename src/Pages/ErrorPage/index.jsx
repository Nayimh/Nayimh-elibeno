import React from 'react';
import { NavLink } from 'react-router-dom';

function Notfound() {
  return (
      <div>
          <div className="container mx-auto grid  justify-center items-center h-[100vh]">
             <div className='flex flex-col items-center'> <p className='text-white font-manrope text-xl md:text-3xl'> 404 Error | Page Not Found </p>
                <NavLink to="/"> <button className='mt-8  text-white font-syne bg-pink rounded py-2 w-24'>Go Home</button> </NavLink> 
                  </div>
          </div>
    </div>
  )
}

export default Notfound