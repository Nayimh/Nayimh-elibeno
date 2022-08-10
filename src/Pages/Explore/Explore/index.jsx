import React from 'react';
import Header from '../../Layers/CommonHeader';
import Footer from '../../Layers/Footer';
import Explore from './Explore';

function ExploreMain() {
  return (
      <div>
          <Header/>
          <div className="container mx-auto py-[120px]">
        <Explore />
        <div className='grid justify-center mt-16'>
          <div className='flex flex-wrap justify-center gap-6 font-manrope text-white font-semibold '>
          <button className='py-3 px-[33px] bg-lightBlue rounded hover:bg-pink text-base leading-loose '>Perv</button>
          <button className='py-3 px-[16.5px] bg-lightBlue rounded hover:bg-pink leading-loose '> 1 </button>
          <button className='py-3 px-[16.5px] bg-lightBlue rounded hover:bg-pink leading-loose '> 2 </button>
          <button className='py-3 px-[16.5px] bg-lightBlue rounded hover:bg-pink leading-loose '> 3 </button>
          <button className='py-3 px-[16.5px] bg-lightBlue rounded hover:bg-pink leading-loose '> 4 </button>
            <button className='py-3 px-[33px] bg-lightBlue rounded hover:bg-pink leading-loose '>Next</button>
            </div>
        </div>
          </div>  
          <Footer/>
      </div>
  );
};
export default ExploreMain;